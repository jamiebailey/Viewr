import { combineReducers } from 'redux';
import app from './app';
import viewer from './viewer';

const reducers = combineReducers({app, viewer});

export default reducers;