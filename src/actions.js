export const LOAD_FILE = 'LOAD_FILE';

export function loadFile(file) {
    return {type: LOAD_FILE, file}
}