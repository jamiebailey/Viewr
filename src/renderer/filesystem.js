import fs from "fs";
import path from 'path';
import uuid from 'uuid/v5';
import Store from './store';

var files = [];

export default class FileSystem {
    static clear = () => {
        files = [];
    }

    static load = filepath => {
        this.files = [];
        for(let file of this.getPathFilesRecursive(filepath)) {
            this._setStore(file, 'id', this._getFileID(file));
            this._setStore(file, 'path', file);
            this.files.push(this._getStore(file));
        }
    }

    static like = (filepath, amount = 1) => {
        let i = this._getFileIndex(filepath);
        let obj = this.files[i];
        obj.likes = (obj.likes !== undefined) ? obj.likes += amount : amount;
        this.files[i] = obj;
        this._setStore(obj.path, 'likes', obj.likes);
    };

    static unlike = filepath => {
        return this.like(filepath, -1);
    }

    static getWeightedRandom = () => {
        let pool = [];
        for(let file of this.files) {
            let likes = (file.likes !== undefined) ? file.likes : 0;
            for(let i = 0; i <= likes; i++) {
                pool.push(file);
            }
        }
        return this.files[Math.floor(Math.random() * pool.length)].path;
    }

    static _getFileIndex = file => {
        let index = 0;
        for(let obj of this.files) {
            if(obj.id === this._getFileID(file)) {
                return index;
            }
            index++;
        }
    }

    static _setStore(file, name, value) {
        let sname = 'app.image.' + this._getFileID(file);
        let obj = Store.get(sname);
        obj = (!obj) ? {} : JSON.parse(obj);
        obj[name] = value;
        Store.set(sname, JSON.stringify(obj));
    }

    static _getStore(file, name = null) {
        let sname = 'app.image.' + this._getFileID(file);
        let obj = Store.get(sname);
        if(!obj) {
            return null;
        }
        obj = JSON.parse(obj);
        return (name === null) ? obj : obj[name];
    }

    static _getFileID = filepath => {
        try {
            return uuid(filepath, uuid.URL);
        } catch (err) {
            return false;
        }
    }

    static getPathContents = filepath => {
        let files = fs.readdirSync(filepath);
        let output = [];
        for(let file of files) {
            output.push(path.join(filepath, file));
        }
        return output;
    }

    static getPathFiles = filepath => {
        let output = [];
        for(let file of this.getPathContents(filepath)) {
            if(!fs.statSync(file).isDirectory()) {
                output.push(file);
            }
        }
        return output;
    }

    static getPathDirs = filepath => {
        let output = [];
        for(let file of this.getPathContents(filepath)) {
            if(fs.statSync(file).isDirectory()) {
                output.push(file);
            }
        }
        return output;
    }

    static getPathFilesRecursive = filepath => {
        let files = this.getPathFiles(filepath);
        for(let dir of this.getPathDirs(filepath)) {
            files = files.concat(this.getPathFilesRecursive(dir));
        }
        return files;
    }

}