import { FILE_LOADED, UPDATE_LIKES } from '../actions/';
import { stat } from 'fs';

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
        case FILE_LOADED:
            let index = state.list.length;
            for(let i = 0; i < state.list.length; i++) {
                let file = state.list[i];
                if(file.id === action.file.id) {
                    index = i;
                }
            }
            let list = (index === state.list.length) ? state.list.concat([action.file]) : state.list;
            return Object.assign({}, state, {
                file: action.file,
                index: index,
                list: list,
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