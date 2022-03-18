'''
This script shuffles all file names under current directory.
BE CAUTIOUS that the process is irreversible.
(This script file will not be renamed in this process.)
'''
import os, random

curFile = __file__
iniFileList = os.listdir(".")
oldFileList = iniFileList[::] # Leave a copy before shuffling

# First rename all files with random names
for file in oldFileList:
    # Do not rename current script file
    if file == curFile:
        continue
    randName = str(int(random.random() * 1000000)) # Large space to avoid collision
    os.rename(file, randName)

# Then rename all files with shuffled names
curFileList = os.listdir(".")
random.shuffle(iniFileList)
i = 0
for file in curFileList:
    # Do not rename current script file
    if file == curFile:
        continue
    # Do not rename file using current script file name
    if iniFileList[i] == curFile:
        i += 1
    os.rename(file, iniFileList[i])
    i += 1