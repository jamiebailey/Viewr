import { remote } from 'electron';
import Store from './renderer/store';
import FileSystem from './renderer/filesystem';
import Dialog from './renderer/dialog';
import Viewer from './renderer/viewer';

let currFile = null;

async function init() {
    let name = 'dir';
    let dir = Store.get(name);
    if(dir === null) {
        let dir = await Dialog.openDirectory();
        Store.set(name, dir);
        return init();
    }
    FileSystem.clear();
    FileSystem.load(dir);
    console.log('loaded', dir);
    currFile = FileSystem.getWeightedRandom();
    Viewer.loadImage(currFile);
}

init();

window.addEventListener('keypress', async e => {
    e.preventDefault();
    switch(e.keyCode) {
        case 111: // 'o': Change Path
            let dir = await Dialog.openDirectory();
            if(!dir) {
                return;
            }
            Store.set('dir', dir);
            init();
            break;
    }
});