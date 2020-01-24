export const LOAD_FILE = 'LOAD_FILE';
export const SET_DIR = 'SET_DIR';

export function loadFile(file) {
    return {type: LOAD_FILE, file}
}

export function setDir(name) {
    return {type: SET_DIR, name};
}