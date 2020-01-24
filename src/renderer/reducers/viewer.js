import { LOAD_FILE, LIKE_FILE } from '../actions/';

export default function viewer(state = null, action) {
    if(state === null) {
        state = {
            file: null,
            index: 0,
            list: [],
            action: null
        };
    }

    switch (action.type) {
        case LOAD_FILE:
            return Object.assign({}, state, {
                file: action.file,
                index: state.list.length,
                list: state.list.concat([action.file]),
                action: action.type
            });
        case LIKE_FILE:
            return Object.assign({}, state, {
                action: action.type
            })
            return state;
        default:
            return state;
    }
}