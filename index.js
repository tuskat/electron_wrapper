const { app, BrowserWindow, Menu } = require('electron');
const { CapacitorSplashScreen } = require('@capacitor/electron');

const path = require('path');

// Place holders for our windows so they don't get garbage collected.
let mainWindow = null;

// Placeholder for SplashScreen ref
let splashScreen = null;

//Change this if you do not wish to have a splash screen
let useSplashScreen = true;

async function createWindow () {
  // Define our main window size
  mainWindow = new BrowserWindow({
    fullscreen: false,
    fullscreenable: true,
    maximizable: true,
    resizeable: true,
    show: false,
    useContentSize: true,
    height: 920,
    width: 1600,
    // webPreferences: {
    //   nodeIntegration: true,
    //   preload: path.join(__dirname, 'node_modules', '@capacitor', 'electron', 'dist', 'electron-bridge.js')
    // }
  });
  mainWindow.setMenuBarVisibility(false);
  if(useSplashScreen) {
    splashScreen = new CapacitorSplashScreen(mainWindow, { loadingText: '' });
    splashScreen.init(false);
  } else {
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.show();
    });
  }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some Electron APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Define any IPC or other custom functionality below here
