'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadApp;

var _electron = require('electron');

var _electronLog = require('electron-log');

var _electronLog2 = _interopRequireDefault(_electronLog);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

var _initTray = require('./initTray');

var _initTray2 = _interopRequireDefault(_initTray);

var _loadURL = require('./loadURL');

var _loadURL2 = _interopRequireDefault(_loadURL);

var _handleLocations = require('./handleLocations');

var _handleLocations2 = _interopRequireDefault(_handleLocations);

var _pages = require('../constants/pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
function loadApp() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state2.default.getUrl();

  _state2.default.mainWindow.loadURL(_pages.urls.loading);
  _state2.default.mainWindow.once('close', function () {
    _state2.default.mainWindow = null;
  });

  var newMain = new _electron.BrowserWindow(Object.assign({}, _state2.default.prefs, {
    show: false,
    webPreferences: {
      nodeIntegration: url.startsWith('file:'),
      nodeIntegrationInWorker: url.startsWith('file:'),
      contextIsolation: false,
      preload: _path2.default.join(__dirname, './preload/preloadMain.js')
    }
  }));
  (0, _loadURL2.default)(url, newMain);
  newMain.webContents.once('did-finish-load', function () {
				/* SIDEBAR */
				/* sidebar left */
				newMain.webContents.insertCSS('.c01142{ background-color: #282C35 !important;}');
				/* contact names sidebar */
				newMain.webContents.insertCSS('.c01156{ color: #dbdbdb !important;');
				/*sidebar topbar & background of search bar (bottom)*/
				newMain.webContents.insertCSS('.c01131{ background-color: #21242D !important;}');
				newMain.webContents.insertCSS('.c01161{ background-color: #21242D !important;}');
				/*sidebar topbar title*/
				newMain.webContents.insertCSS('.c01135{ color: darkgrey !important;');
				/* selected contact*/
				newMain.webContents.insertCSS('.c01154{ background-color: #5a5b5c !important;');
				newMain.webContents.insertCSS('.c01152:hover{ background-color: #43464a !important;');
				/* sidebar headers */
				newMain.webContents.insertCSS('.c01148{ color:#83888C !important;}');
				/*icons*/
				newMain.webContents.insertCSS('.c01265{ color:#83888C !important;}');
				newMain.webContents.insertCSS('.c01265:hover{ color:#337cc4 !important;}');
				/* text beside icons */
				newMain.webContents.insertCSS('.c01266{ color:#83888C !important;}');
				newMain.webContents.insertCSS('.c01266:hover{ color:#337cc4 !important;}');

				/* CHAT SIDEBAR */
				/*sidebar background */
				newMain.webContents.insertCSS('.c01441{ background: #414857 !important};');
				/* sidebar toppers */
				newMain.webContents.insertCSS('.c01409, .c01460{ background: #3a404e !important};');
				/* sidebar toppers icons */
				newMain.webContents.insertCSS('.c01461:hover{ color: #337cc4 !important};');
				/*sidebar headers (text)*/
				newMain.webContents.insertCSS('.c01416, .c01445, .c01502{ color: whitesmoke !important};');
				/* sidebar member text */
				newMain.webContents.insertCSS('.c01511, .c01512, .c01513, .c01514, .c01522 { color: darkgray !important};');
				newMain.webContents.insertCSS('.c01511:hover, .c01512:hover, .c01513:hover, .c01514:hover, .c01522:hover { color: #337cc4 !important};');
				/* sidebar member icons */
				newMain.webContents.insertCSS('.c01515:before, .c01516:before, .c01517:before, .c01518:before { color: darkgray !important};');

				/* CHAT */
				/* Top bar */
				newMain.webContents.insertCSS('.c01191{ background-color: #21242D !important;}');
				/* Chat BG*/
				newMain.webContents.insertCSS('.c01336{ background-color: #282C35 !important;}');
				/* contact name */
				newMain.webContents.insertCSS('.c01220{ color: #ababab !important;}');
				/* contact name in chat*/
				newMain.webContents.insertCSS('.c01360{ color: #ababab !important;}');
				/* icons: @, sidebar, video, settings */
				newMain.webContents.insertCSS('.c01229, .c01306, .c01254, .c01258{ color: #ababab !important;}');
				newMain.webContents.insertCSS('.c01229:hover, .c01306:hover, .c01254:hover, .c01258:hover{ color: #337cc4 !important;}');
				/*date boxes*/
				newMain.webContents.insertCSS('.c01340{ background: #282C35 !important; color: darkgray !important; }');
				/* date boxes line*/
				newMain.webContents.insertCSS('.c01387:before{ background: rgba(255,255,255,0.3) !important; }');
				/* mark down box*/
				newMain.webContents.insertCSS('.c01174{ background: #282C35 !important; color: darkgray !important; }');
				/* chat blobs */
				newMain.webContents.insertCSS('.c01419{ background-color: #afafaf !important; box-shadow: -3 0 0 0 snow !important; border-color: #afafaf !important; }');
				newMain.webContents.insertCSS('.c01420{ background-color: #afafaf !important; }');

				/* FOOTER */
				/* footer bg */
				newMain.webContents.insertCSS('.c01177{ background: #21242D !important};');
				/* footer text */
				newMain.webContents.insertCSS('.c01328{ color: #dedede !important};');
				/* footer icons */
				newMain.webContents.insertCSS('.c01332{ color: #ababab !important};');
				newMain.webContents.insertCSS('.c01332:hover{ color: #337cc4 !important};');

	var hidden = true;

    if (_state2.default.mainWindow) {
      _state2.default.preventClose = false;
      _state2.default.mainWindow.close();
      _state2.default.preventClose = true;
      hidden = false;
    }

    if (_state2.default.prefs.show) {
      if (hidden) {
        _electron.app.once('activate', function (e, hasVisibleWindows) {
          _electronLog2.default.info('activate', hasVisibleWindows);
          newMain.show();
        });
      } else {
        newMain.show();
      }
    } else {
      newMain.minimize();
    }

    _state2.default.mainWindow = newMain;
    _state2.default.mainWindow.on('close', _close2.default);
    _state2.default.mainWindow.on('hide', function () {
      _state2.default.mainWindow.blurWebView();
    });

    if (_env2.default.name !== 'production') _state2.default.mainWindow.openDevTools();

    if (!_state2.default.trayIcon) {
      (0, _initTray2.default)();
    }
    (0, _handleLocations2.default)();
  });
}