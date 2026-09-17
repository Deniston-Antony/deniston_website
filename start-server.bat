@echo off
cd /d "%~dp0"
echo Starting Deniston site at http://127.0.0.1:5500/
echo Keep this window open while you browse.
echo.
py -3 -u -m http.server 5500 --bind 127.0.0.1
pause
