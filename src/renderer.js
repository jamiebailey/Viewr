import { remote } from 'electron';
import Store from './renderer/store';
import FileSystem from './renderer/filesystem';
import Dialog from './renderer/dialog';

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
    console.log(FileSystem.getWeightedRandom());
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