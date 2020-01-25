import { DIR_UPDATED } from '../actions/';

export default function app(state = null, action) {
    if(state === null) {
        state = {
            dirname: null,
        };
    }
    switch(action.type) {
        case DIR_UPDATED:
            return Object.assign({}, state, {
                dirname: action.name
            })
            break;
        default:
            return state;
    }
}