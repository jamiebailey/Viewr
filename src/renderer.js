import { remote } from 'electron';
import Store from './renderer/store';
import FileSystem from './renderer/filesystem';

async function init() {
    let name = 'dir';
    let dir = Store.get(name);
    if(dir === null) {
        let dir = await getPath();
        Store.set(name, dir);
    }
    FileSystem.load(dir);
}

init();

async function getPath() {
    let res = await remote.dialog.showOpenDialog({
        properties: ['openDirectory']
    });
    if(res.canceled) {
        return false;
    }
    return res.filePaths[0];
}

window.addEventListener('keypress', e => {
    e.preventDefault();
    switch(e.keyCode) {
        case 111:
            break;
    }
})