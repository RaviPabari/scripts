# Open CMD/Powershell here
This script uses `PyAutogui`

## 1. Install requirements
```
pip3 install pyautogui, pyinstaller
```

## 2. Generate the .exe

## 3. Create a shortcut to execute the .exe from anywhere
---

## Steps to convert the .py to exe
```
pyintaller --onefile -w .\open_powershell_here.py
```
> This is sample output after running the command
>
> NOTE: .exe will be present inside dist/
```
78 INFO: PyInstaller: 5.6.2
78 INFO: Python: 3.10.1
111 INFO: Platform: Windows-10-10.0.19043-SP0
111 INFO: wrote E:\scripts\Open_terminal_here\Powershell\open_powershell_here.spec
115 INFO: UPX is not available.
122 INFO: Extending PYTHONPATH with paths
['E:\\scripts\\Open_terminal_here\\Powershell']
439 INFO: checking Analysis
439 INFO: Building Analysis because Analysis-00.toc is non existent
439 INFO: Initializing module dependency graph...
443 INFO: Caching module graph hooks...
460 INFO: Analyzing base_library.zip ...
1675 INFO: Loading module hook 'hook-heapq.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
1755 INFO: Loading module hook 'hook-encodings.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
3086 INFO: Loading module hook 'hook-pickle.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
4121 INFO: Caching module dependency graph...
4221 INFO: running Analysis Analysis-00.toc
4240 INFO: Adding Microsoft.Windows.Common-Controls to dependent assemblies of final executable
  required by C:\Users\Ravi\AppData\Local\Programs\Python\Python310\python.exe
4305 INFO: Analyzing E:\scripts\Open_terminal_here\Powershell\open_powershell_here.py
4370 INFO: Loading module hook 'hook-platform.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
4699 INFO: Loading module hook 'hook-difflib.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
4930 INFO: Loading module hook 'hook-sysconfig.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
5295 INFO: Loading module hook 'hook-multiprocessing.util.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
5401 INFO: Loading module hook 'hook-xml.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
5930 INFO: Processing module hooks...
5994 INFO: Loading module hook 'hook-_tkinter.py' from 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks'...
6147 INFO: checking Tree
6147 INFO: Building Tree because Tree-00.toc is non existent
6147 INFO: Building Tree Tree-00.toc
6235 INFO: checking Tree
6236 INFO: Building Tree because Tree-01.toc is non existent
6236 INFO: Building Tree Tree-01.toc
6342 INFO: checking Tree
6342 INFO: Building Tree because Tree-02.toc is non existent
6342 INFO: Building Tree Tree-02.toc
6367 INFO: Looking for ctypes DLLs
6384 INFO: Analyzing run-time hooks ...
6388 INFO: Including run-time hook 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks\\rthooks\\pyi_rth_subprocess.py'        
6391 INFO: Including run-time hook 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks\\rthooks\\pyi_rth_inspect.py'
6406 INFO: Including run-time hook 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks\\rthooks\\pyi_rth_pkgutil.py'
6414 INFO: Including run-time hook 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks\\rthooks\\pyi_rth_multiprocessing.py'
6419 INFO: Including run-time hook 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\hooks\\rthooks\\pyi_rth__tkinter.py'
6431 INFO: Looking for dynamic libraries
171 INFO: Extra DLL search directories (AddDllDirectory): []
171 INFO: Extra DLL search directories (PATH): ['C:\\Program Files\\Common Files\\Oracle\\Java\\javapath', 'C:\\Windows\\system32', 'C:\\Windows', 'C:\\Windows\\System32\\Wbem', 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\', 'C:\\Windows\\System32\\OpenSSH\\', 'C:\\Program Files\\Git\\cmd', 'C:\\Program Files\\nodejs\\', 'C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common', 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\\', 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\', 
'C:\\Users\\Ravi\\AppData\\Local\\Microsoft\\WindowsApps', 'C:\\Users\\Ravi\\AppData\\Local\\Programs\\Microsoft VS Code\\bin', 'C:\\Users\\Ravi\\AppData\\Roaming\\npm', 'C:\\src\\flutter\\bin']
7219 INFO: Looking for eggs
7219 INFO: Using Python library C:\Users\Ravi\AppData\Local\Programs\Python\Python310\python310.dll
7219 INFO: Found binding redirects:
[]
7233 INFO: Warnings written to E:\scripts\Open_terminal_here\Powershell\build\open_powershell_here\warn-open_powershell_here.txt
7277 INFO: Graph cross-reference written to E:\scripts\Open_terminal_here\Powershell\build\open_powershell_here\xref-open_powershell_here.html
7415 INFO: checking PYZ
7415 INFO: Building PYZ because PYZ-00.toc is non existent
7415 INFO: Building PYZ (ZlibArchive) E:\scripts\Open_terminal_here\Powershell\build\open_powershell_here\PYZ-00.pyz
7838 INFO: Building PYZ (ZlibArchive) E:\scripts\Open_terminal_here\Powershell\build\open_powershell_here\PYZ-00.pyz completed successfully.
7856 INFO: checking PKG
7856 INFO: Building PKG because PKG-00.toc is non existent
7857 INFO: Building PKG (CArchive) open_powershell_here.pkg
10123 INFO: Building PKG (CArchive) open_powershell_here.pkg completed successfully.
10161 INFO: Bootloader C:\Users\Ravi\AppData\Local\Programs\Python\Python310\lib\site-packages\PyInstaller\bootloader\Windows-64bit\runw.exe
10162 INFO: checking EXE
10162 INFO: Building EXE because EXE-00.toc is non existent
10162 INFO: Building EXE from EXE-00.toc
10164 INFO: Copying bootloader EXE to E:\scripts\Open_terminal_here\Powershell\dist\open_powershell_here.exe.notanexecutable
10241 INFO: Copying icon to EXE
10242 INFO: Copying icons from ['C:\\Users\\Ravi\\AppData\\Local\\Programs\\Python\\Python310\\lib\\site-packages\\PyInstaller\\bootloader\\images\\icon-windowed.ico']
10321 INFO: Writing RT_GROUP_ICON 0 resource with 104 bytes
10322 INFO: Writing RT_ICON 1 resource with 3752 bytes
10322 INFO: Writing RT_ICON 2 resource with 2216 bytes
10323 INFO: Writing RT_ICON 3 resource with 1384 bytes
10323 INFO: Writing RT_ICON 4 resource with 38188 bytes
10323 INFO: Writing RT_ICON 5 resource with 9640 bytes
10324 INFO: Writing RT_ICON 6 resource with 4264 bytes
10324 INFO: Writing RT_ICON 7 resource with 1128 bytes
10327 INFO: Copying 0 resources to EXE
10328 INFO: Embedding manifest in EXE
10329 INFO: Updating manifest in E:\scripts\Open_terminal_here\Powershell\dist\open_powershell_here.exe.notanexecutable
10401 INFO: Updating resource type 24 name 1 language 0
10403 INFO: Appending PKG archive to EXE
10416 INFO: Fixing EXE headers
11562 INFO: Building EXE from EXE-00.toc completed successfully.
```

