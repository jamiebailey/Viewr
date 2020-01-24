import { combineReducers } from 'redux';
import { LOAD_FILE } from './actions';
import { stat } from 'fs';

function app(state = null, action) {
    if(state === null) {
        state = {
            dirname: null,
        };
    }
    switch(action.type) {
        default:
            return state;
    }
}

function viewer(state = null, action) {
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

const all = combineReducers({app, viewer});

export default all;