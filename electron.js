const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    //win.loadURL("http://localhost:3000"); // For local testing with npm start
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`); // For building app with electron-builder
}

app.on("ready", createWindow);