import { LOAD_FILE } from '../actions/';

export default function viewer(state = null, action) {
    if(state === null) {
        state = {
            file: null,
            index: 0,
            list: []
        };
    }

    switch (action.type) {
        case LOAD_FILE:
            return Object.assign({}, state, {
                file: action.file,
                index: state.list.length,
                list: state.list.concat([action.file])
            });
            break;
        default:
            return state;
    }
}