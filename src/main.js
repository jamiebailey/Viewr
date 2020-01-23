import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile(path.resolve('main.html'));

});