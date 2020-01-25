import Folder from './folder';

export default class FileSystem {
    folder = null;
    files = [];
    prevFile = null;

    static setFolder = (dirname) => {
        this.folder = new Folder(dirname);
        this.files = this.folder.allFiles;
    }

    static getTotalLikes = () => {
        let likes = 0;
        for(let file of this.files) {
            likes += file.likes;
        }
        return likes;
    }

    static getFileIndex = (currFile) => {
        for(let i in this.files) {
            let file = this.files[i];
            if(file.id === currFile.id) {
                return i;
            }
        }
        return false;
    };

    static getNextFile = (currFile) => {
        let i = parseInt(this.getFileIndex(currFile)) + 1;
        if(i >= this.files.length) {
            i = 0;
        }
        return this.files[i];
    };

    static getPrevFile = (currFile) => {
        let i = this.getFileIndex(currFile) - 1;
        if(i < 0) {
            i = this.files.length - 1;
        }
        return this.files[i];
    };

    static getRandomFile = () => {
        let likes = this.getTotalLikes();
        let rand = Math.floor(Math.random() * (likes + this.files.length));
        let offset = 0;
        for(let file of this.files) {
            offset += file.likes + 1;
            if(offset - 1 > rand) {
                if(this.prevFile !== undefined) {
                    if(this.prevFile.id === file.id && this.files.length > 1) {
                        return this.getRandomFile();
                    }
                }
                return this.prevFile = file;
            }
        }
    }
}