import Store from './renderer/store';
import FileSystem from './renderer/system/filesystem';
import Dialog from './renderer/dialog';
import Viewer from './renderer/viewer';


async function init() {
    let name = 'dir';
    let dir = Store.get(name);
    if(dir === null) {
        let dir = await Dialog.openDirectory();
        Store.set(name, dir);
        return init();
    }
    FileSystem.setFolder(dir);
    new Viewer(FileSystem.getRandomFile());
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
        case 114:
            new Viewer(FileSystem.getRandomFile());
            break;
    }
});