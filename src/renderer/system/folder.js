import fs from 'fs';
import path from 'path';
import File from './file';

export default class Folder {
    constructor(dirname) {
        if(!fs.existsSync(dirname)) {
            throw 'folder not found';
        }
        this.dirname = dirname;
        this.name = path.basename(this.dirname);
        this.files = [];
        this.images = [];
        this.videos = [];
        this.folders = [];
        this.allFiles = [];
        this._read();
    }

    _read() {
        this.files = [];
        this.folders = [];
        let contents = fs.readdirSync(this.dirname);
        for(let content of contents) {
            let fullpath = path.join(this.dirname, content);
            try {
                if(fs.statSync(fullpath).isDirectory()) {
                    this.folders.push(new Folder(fullpath));
                    continue;
                }
                let file = new File(fullpath);
                this.files.push(file);
                if(file.type === 'image') {
                    this.images.push(file);
                } else if(file.type === 'video') {
                    this.videos.push(file);
                }
            } catch (err) {
                continue;
            }
        }
        this.allFiles = this.files;
        for(let folder of this.folders) {
            this.allFiles = this.allFiles.concat(folder.allFiles);
        }
    }

}