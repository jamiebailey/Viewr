const store = window.localStorage;

export default class Storage {

    static get = name => store.getItem(name)
    static set = (name, value) => store.setItem(name, value)
}