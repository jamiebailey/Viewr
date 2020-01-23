import fs from "fs";
import path from 'path';
import uuid from 'uuid/v5';
import Store from './store';

var files = [];

export default class FileSystem {
    static clear = () => {
        files = [];
    }

    static load = (filepath) => {
        this.files = [];
        for(let file of this.getPathFilesRecursive(filepath)) {
            this.setStore(file, 'id', this.getFileID(file));
            this.setStore(file, 'path', file);
            this.files.push(this.getStore(file));
        }
        console.log(this.files);
    }

    static setStore(file, name, value) {
        let sname = 'app.image.' + this.getFileID(file);
        let obj = Store.get(sname);
        obj = (!obj) ? {} : JSON.parse(obj);
        obj[name] = value;
        Store.set(sname, JSON.stringify(obj));
    }

    static getStore(file, name = null) {
        let sname = 'app.image.' + this.getFileID(file);
        let obj = Store.get(sname);
        if(!obj) {
            return null;
        }
        obj = JSON.parse(obj);
        return (name === null) ? obj : obj[name];
    }

    static getFileID = filepath => {
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