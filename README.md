# Grape-Dark-Mode for Grape 2.19.0
__This file changes the appearance of Grape Chat to a dark mode by using an CSS injection.__


## Usage
  1. Install **npm** on your system.
  2. Install **asar** through npm ( ```npm -g install asar``` )
  3. Decrypt app.asar located at _install-path_\Grape\resources into app folder ( ```asar extract app.asar app``` )
  4. Rename app.asar, so app folder will be used instead
  5. Copy downloaded **loadApp.js** file to _install-path_\Grape\resources\app\lib\app
  6. Exit grape (if currently running) and restart it 
  
## Bug handling
  - If Grape doesn't appear in darkmode after restarting it, try rebooting your PC (worked in my case)
  - since this uses CSS injections and I'm not affiliated with the developers, I sadly can't give any other advice

## Known Issues
  - After reload ( ``` strg + r``` or after losing connection to the server ), the dark mode doesn't get loaded correctly
