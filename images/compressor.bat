@echo off
setlocal enabledelayedexpansion

set "folderPath=E:\CODE\WEB DEV\Projects\karan-deo\images\works"
set "extension=.webp"
set "prefix="

cd /d "%folderPath%" || exit /b

set /a counter=1
for %%f in (*%extension%) do (
    ffmpeg -i !counter!_!extension! -vf scale=1000:-1 !counter!!extension!
    set /a counter+=1
)

endlocal
