import Folder from './folder';

export default class FileSystem {
    folder = null;
    files = [];
    prevFile = null;

    static setFolder = (dirname) => {
        this.folder = new Folder(dirname);
        this.files = this.folder.allFiles;
    }

    static getRandomFile = () => {
        let pool = [];
        for(let file of this.files) {
            for(let i = 0; i <= file.likes; i++) {
                pool.push(file);
            }
        }
        let i = Math.floor(Math.random() * pool.length);
        console.log(this.prevFile);
        if(this.prevFile !== undefined) {
            if(this.prevFile.id === pool[i].id) {
                i = Math.floor(Math.random() * pool.length);
            }
        }
        return this.prevFile = pool[i];
    }
}