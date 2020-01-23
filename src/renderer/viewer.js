
let root = window.document.getElementById('app');

let baseElem = window.document.createElement('div');
baseElem.setAttribute('class', 'viewer');

root.appendChild(baseElem);

export default class Viewer {
    static loadImage = filepath => {
        let elem = window.document.createElement('img');
        elem.setAttribute('src', filepath);
        this.empty();
        baseElem.appendChild(elem);
    }

    static empty = () => {
        baseElem.innerHTML = '';
    }
}