const store = window.localStorage;

export default class Store {

    static get = name => store.getItem(name)
    static set = (name, value) => store.setItem(name, value)
}