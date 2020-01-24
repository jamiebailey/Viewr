import Folder from './folder';

export default class FileSystem {
    folder = null;
    files = [];

    static setFolder = (dirname) => {
        this.folder = new Folder(dirname);
        this.files = this.folder.allFiles;
    }

    static getRandomFile = () => {
        let i = Math.floor(Math.random() * this.files.length);
        return this.files[i];
    }
}