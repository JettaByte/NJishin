const { app, BrowserWindow } = require('electron')
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
    })
    win.loadFile('index.html')
    console.log('I hate namuwiki.')
    console.log('How foolish they are!')

}

app.whenReady().then(async () => {
    createWindow();

    // app.on('activate', () => {
    //     if (BrowserWindow.getAllWindows().length === 0) {
    //         createWindow();
    //     }
    // });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});