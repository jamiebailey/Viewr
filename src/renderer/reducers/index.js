import { combineReducers } from 'redux';
import { SET_DIR, LOAD_FILE } from '../actions/';
import app from './app';
import viewer from './viewer';

const reducers = combineReducers({app, viewer});

export default reducers;