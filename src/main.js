import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

Menu.setApplicationMenu(false);

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        fullscreenable: true
    });
    win.loadFile('./main.html');

});