const { app, BrowserWindow } = require('electron')
const request = require("request");
const axios = require("axios");
const cheerio = require("cheerio");
const https = require('http');
const log = console.log;

const createWindow = async () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
    })
    win.loadFile('index.html')
    console.log('I hate namuwiki.')
    console.log('How foolish they are!')

}

const getEew = async () => {
    let url = "http://www.kmoni.bosai.go.jp/webservice/hypo/eew/20220811005330.json";
    https.get(url, stream => {
        let rawdata = '';
        stream.setEncoding('utf8');
        stream.on('data', buffer => rawdata += buffer);
        stream.on('end', function () {
            console.log(rawdata);
        });
    });
}

app.whenReady().then(async () => {
    await createWindow();
    await getEew()
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