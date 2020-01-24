import fs from 'fs';
import path from 'path';
import uuid from 'uuid/v5';
import Storage from './storage';

const IMAGE = ['jpg', 'jpeg', 'gif', 'png'];
const VIDEO = ['mp4', 'webm', 'mkv'];
const STORE_PREFIX = 'app.file.';

export default class File {
    constructor(filepath) {
        if(!fs.existsSync(filepath)) {
            throw 'file not found';
        }
        this.filepath = filepath;
        this.id = this._generateId(this.filepath);
        this.dirname = path.dirname(this.filepath);
        this.filename = path.basename(this.filepath);
        this.extension = path.extname(this.filepath).substr(1);
        this.type = false;
        if(IMAGE.includes(this.extension)) {
            this.type = 'image';
        } else if(VIDEO.includes(this.extension)) {
            this.type = 'video';
        } else {
            throw 'file is not an image or video';
        }
        this.likes = this._readStore('likes');
        if(!this.likes || this.likes < 0) {
            this.likes = 0;
        }
        this._save();
    }

    like(amount = 1) {
        this.likes += amount;
        this._save();
    }

    dislike(amount = 1) {
        this.likes -= amount;
        if(this.likes < 0) {
            this.likes = 0;
        }
        this._save();
    }

    _save() {
        this._writeStore('likes', this.likes);
    }

    _generateId(filepath) {
        return uuid(filepath, uuid.URL);
    }

    _readStore(name) {
        let data = Storage.get(STORE_PREFIX + this.id);
        if(!data) {
            return null;
        }
        let obj = JSON.parse(data);
        if(obj[name] === undefined) {
            return null;
        }
        return obj[name];
    }

    _writeStore(name, value) {
        let data = Storage.get(STORE_PREFIX + this.id);
        let obj = (!data) ? {} : JSON.parse(data);
        obj[name] = value;
        data = JSON.stringify(obj);
        Storage.set(STORE_PREFIX + this.id, data);
    }

}