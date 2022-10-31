/**
 * Configure the batch size according to your need.
 * 2000 works fine for me
 */
const BATCH_SIZE = 2000;
/**
 * DB configuration:
 * source DB IP,
 * soruce DB name,
 * destination DB IP,
 * destination DB name
 */
let srcConnection = ''
let srcDb = ''
let dstConnection = ''
let dstDb = ''



use(dstDb);

//idPolicy: overwrite_with_same_id|always_insert_with_new_id|insert_with_new_id_if_id_exists|skip_documents_with_existing_id|abort_if_id_already_exists|drop_collection_first|log_errors
/**
 * Collection configurations:
 * source collection name,
 * query,
 * projection,
 * destination collection name,
 * policy
 */
let toCopyCollections = [
    {
        srcCollection: "productsFeed_ae_en",
        query: {},
        projection: {},
        dstCollection: "productsFeed_ae_ar",
        idPolicy: "overwrite_with_same_id"
    }
];

let toRecreateViews = []

// if have more indexes than default index (_id), create index after copy data.
let shouldCreateIndex = true;

let totalCopyResult = {
    result: {},
    fails: [],
}

function copyCollection(params) {
    let { srcCollection, dstCollection, query, projection, idPolicy } = params;

    console.log(`Copy docs from "${srcConnection}:${srcDb}:${srcCollection}" to "${dstConnection}:${dstDb}:${dstCollection}" start...`);

    let isSameCollection = srcConnection === dstConnection && srcDb === dstDb && srcCollection === dstCollection;

    if (isSameCollection) {
        if (toCopyCollections.length === 1)
            shouldCreateIndex = false;
        else
            params.shouldCreateIndex = false;
    }

    if (idPolicy === "drop_collection_first") {
        // srcCollection is same to dstCollection, can not drop dstCollection (equal to drop srcCollection)
        // drop dst collection and copy from same collection, means nothing to do.
        if (isSameCollection) return;

        mb.dropCollection({ connection: dstConnection, db: dstDb, collection: dstCollection });
        console.log(`drop collection "${dstDb}.${dstCollection}"`);
    }

    totalCopyResult.result[dstCollection] = {
        nInserted: 0,
        nModified: 0,
        nSkipped: 0,
        failed: 0,
    };
    let collectionRst = totalCopyResult.result[dstCollection];

    let limitReadCount = Number.MAX_SAFE_INTEGER;
    if (isSameCollection) {
        limitReadCount = mb.runScript({ connection: srcConnection, db: srcDb, script: `db.getCollection(${tojson(srcCollection)}).find(${tojson(query)}).count()` })
    }

    const batchSize = limitReadCount > BATCH_SIZE ? BATCH_SIZE : limitReadCount;
    const cursor = await(mb.getCursorFromCollection({ connection: srcConnection, db: srcDb, collection: srcCollection, query, projection }));
    const totalCount = cursor.size ? cursor.size() : cursor.count();

    await(mb.batchReadFromCursor(cursor, batchSize, (docs) => {
        return async(() => {
            let readLength = docs.length;
            if (!readLength) return;

            let copyResult = mb.writeToDb({ connection: dstConnection, db: dstDb, collection: dstCollection, docs, idPolicy });
            let failed = copyResult.errors.length;
            let success = copyResult.nInserted + copyResult.nModified;

            collectionRst.nInserted += copyResult.nInserted;
            collectionRst.nModified += copyResult.nModified;
            collectionRst.nSkipped += copyResult.nSkipped;
            collectionRst.failed += failed;
            const processedCount = collectionRst.nInserted + collectionRst.nModified + collectionRst.nSkipped + collectionRst.failed;

            const percent = (processedCount / totalCount * 100).toFixed(1);

            console.log(`${dstCollection}: ${percent}%	 ${processedCount}/${totalCount}	 ${collectionRst.nInserted + collectionRst.nModified} docs successfully imported, ${collectionRst.failed} docs failed.`);

            if (failed) {
                console.log("Failed objects", copyResult.errors);
            }

            totalCopyResult.fails = [...totalCopyResult.fails, ...copyResult.errors];
        })();
    }));

    sleep(100);
    console.log(`copy docs from "${srcConnection}:${srcDb}:${srcCollection}" to "${dstConnection}:${dstDb}:${dstCollection}" finished.
`);
}

//Copy collections
for (let collection of toCopyCollections) {
    await(copyCollection(collection));
}

//Recreate database readonly views
for (let view of toRecreateViews) {
    const viewOn = tojson(view.viewOn);
    const viewName = tojson(view.name);
    const script = `var dropIfExists=false;
    if (dropIfExists){
        db.getCollection(${viewName}).drop();
    }
    db.getCollection(${viewOn}).aggregate(${tojson(view.pipeline)}).saveAsView(${viewName}, ${tojson(view.options)})`;
    const rst = await(mb.runScript({ connection: dstConnection, db: dstDb, script }));
    if (!(rst && rst.ok)) {
        console.error(rst.message);
    } else {
        console.log(`re-created readonly view ${viewName} `);
    }
}


if (shouldCreateIndex) {
    let indexCreationPrompted = false;
    function indexCreationPrompt() {
        if (indexCreationPrompted) return;

        const waitTime = 3;
        console.log(`Index creating will start in ${waitTime} seconds...`)
        sleep(1000 * waitTime);
        indexCreationPrompted = true;
    }

    let srcCollections = toCopyCollections.filter(it => it["shouldCreateIndex"] !== false).map(it => it.srcCollection)
    srcCollections.forEach(it => {
        let indexes = mb.runScript({ connection: srcConnection, db: srcDb, script: `db.getCollection(${tojson(it)}).getIndexes();` });
        if (indexes.length > 1) {
            let toCopyCollection = _.find(toCopyCollections, { srcCollection: it });
            if (!toCopyCollection) return;

            let dstCollection = toCopyCollection.dstCollection;

            indexes.forEach(index => {
                if (index.name === "_id_") return;

                indexCreationPrompt();

                let newIndex = _.cloneDeep(index);

                // remove index version and engine info, these info may fail createIndexes operator.
                delete newIndex.v;
                delete newIndex.textIndexVersion;
                delete newIndex["2dsphereIndexVersion"];
                delete newIndex.storageEngine;

                newIndex.ns = `${dstDb}.${dstCollection}`;

                console.log(`create index ${newIndex.name} for "${dstDb}.${dstCollection}"`);
                db.runCommand({
                    createIndexes: dstCollection,
                    indexes: [newIndex]
                });
            })
        }
    });

    if (indexCreationPrompted)
        console.log("create index complete.")
}

if (totalCopyResult.result) {
    let success = 0;
    let failed = 0;
    let collections = _.keys(totalCopyResult.result);
    collections.forEach((key) => {
        let obj = totalCopyResult.result[key];
        success += obj.nInserted + obj.nModified;
        failed += obj.failed;
    });

    console.log(`
${success} document(s) of ${collections.length} collection(s) have been copied.\n`, totalCopyResult.result);

    if (failed) {
        console.log(`${failed} document(s) haven't been copied, please check failed list below.`);
    } else {
        console.log("All documents copied successfully.");
    }
}

if (totalCopyResult.fails.length) {
    console.log("All failed objects\n", totalCopyResult.fails);
}