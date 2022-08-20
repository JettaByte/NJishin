const { app, BrowserWindow } = require('electron')
const request = require("request");
const axios = require("axios");
const cheerio = require("cheerio");
const https = require('http');
const WebSocketS = require("ws").Server;
const wss = new WebSocketS({ port: 1715 });
const $ = jQuery = require('jquery')(window);

const log = console.log;

//jsdom 사용을 위한 document 전역 변수 선언

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
    let rawdataoutput;
    https.get(url, stream => {
        let rawdata = '';
        stream.setEncoding('utf8');
        stream.on('data', buffer => rawdata += buffer);
        stream.on('end', function () {
            rawdataoutput = rawdata;
        });
    });
    ws.send(rawdataoutput + "가! 강진모니터의 긴급지진속보 전문이다 맨이야!");

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