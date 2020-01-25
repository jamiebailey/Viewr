export const FILE_LOADED = 'FILE_LOADED';
export const SET_DIR = 'SET_DIR';
export const UPDATE_LIKES = 'UPDATE_LIKES';

export function fileLoaded(file) {
    return {type: FILE_LOADED, file}
}

export function setDir(name) {
    return {type: SET_DIR, name};
}

export function updateLikes(likes) {
    return {type: UPDATE_LIKES, likes};
}