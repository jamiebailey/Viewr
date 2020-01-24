import File from './system/file';

let app = window.document.getElementById('app');

export default class Viewer {
    constructor(file) {
        if(!(file instanceof File)) {
            throw 'not instance of file';
        }
        this.name = file.filename;
        this.type = file.type;
        this.path = file.filepath;
        this.element = this._createElement();
        this.aspectRatio = 0;
        this._events();
        this.test();
    }

    _createElement() {
        let elem = window.document.createElement((this.type === 'image') ? 'img' : 'video');
        elem.setAttribute('src', this.path);
        elem.style.position = 'fixed';
        //elem.style.opacity = '0';
        return elem;
    }

    _events() {
        this.element.addEventListener('load', () => {
            this._calculateScale();
            this._calculatePosition();
        });
        window.addEventListener('resize', () => {
            this._calculateScale();
            this._calculatePosition();
        });
    }

    _calculateScale() {
        let eleW = this.element.width;
        let eleH = this.element.height;
        let winW = window.innerWidth;
        let winH = window.innerHeight;

        if(this.aspectRatio === 0) {
            this.aspectRatio = (eleH/eleW);
        }

        if(eleW > eleH) {
            this.element.width = winW;
            this.element.height = Math.floor(winW * this.aspectRatio);
        } else {
            this.element.height = winH;
            this.element.width = Math.floor(winH / this.aspectRatio);
        }
    }

    _calculatePosition() {
        this.element.style.left = Math.floor((window.innerWidth / 2) - (this.element.width / 2)) + 'px';
        this.element.style.top = Math.floor((window.innerHeight / 2) - (this.element.height / 2)) + 'px';
    }

    test() {
        app.innerHTML = '';
        app.appendChild(this.element);
    }
}