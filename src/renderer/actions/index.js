export const LOAD_FILE = 'LOAD_FILE';
export const SET_DIR = 'SET_DIR';
export const LIKE_FILE = 'LIKE_FILE';
export const DISLIKE_FILE = 'DISLIKE_FILE';

export function loadFile(file) {
    return {type: LOAD_FILE, file}
}

export function setDir(name) {
    return {type: SET_DIR, name};
}

export function likeFile() {
    return {type: LIKE_FILE};
}

export function dislikeFile() {
    return {type: DISLIKE_FILE};
}