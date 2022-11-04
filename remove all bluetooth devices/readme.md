Lately my bluetooth manager was filled with unnecessary bluetooth devices which I had previously 
connected to and finding my new device was getting a little hard among those devices, so I needed to 
remove all the previously connected devices.

This script does exactly what I was looking for!

```
#!/bin/bash 
for device in $(bt-device -l | grep -o "[[:xdigit:]:]\{11,17\}"); do
    echo "removing bluetooth device: $device | $(bt-device -r $device)"
done
```

# How to run?
- Make a new file like `<fileName>.sh` and paste the code above.
- Run `chmod +x <fileName>` to make the script executable
- Run `./<fileName>.sh`
- Celebrate! All Bluetooth devices are removed now :)

Credits to - Jesse de gans
https://stackoverflow.com/a/65006935/9782037