export const FILE_LOADED = 'FILE_LOADED';
export const DIR_UPDATED = 'DIR_UPDATED';
export const UPDATE_LIKES = 'UPDATE_LIKES';

export function fileLoaded(file) {
    return {type: FILE_LOADED, file}
}

export function dirUpdated(name) {
    return {type: DIR_UPDATED, name};
}

export function updateLikes(likes) {
    return {type: UPDATE_LIKES, likes};
}