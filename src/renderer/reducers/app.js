import { SET_DIR } from '../actions/';

export default function app(state = null, action) {
    if(state === null) {
        state = {
            dirname: null,
        };
    }
    switch(action.type) {
        case SET_DIR:
            return Object.assign({}, state, {
                dirname: action.name
            })
            break;
        default:
            return state;
    }
}