import { LOAD_FILE, UPDATE_LIKES } from '../actions/';

export default function viewer(state = null, action) {
    if(state === null) {
        state = {
            file: null,
            index: 0,
            list: [],
            action: null,
            likes: 0,
        };
    }

    switch (action.type) {
        case LOAD_FILE:
            return Object.assign({}, state, {
                file: action.file,
                index: state.list.length,
                list: state.list.concat([action.file]),
                action: action.type,
                likes: action.file.likes
            });
        case UPDATE_LIKES:
            return Object.assign({}, state, {
                action: action.type,
                likes: action.likes,
            })
        default:
            return state;
    }
}