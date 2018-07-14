node --harmony .

if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd "C:\Users\noah\Desktop\Discord Bot"

start /min cmd /C "node --harmony ."
goto :EOF
:minimized