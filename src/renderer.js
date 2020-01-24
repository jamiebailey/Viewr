import './scss/renderer.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './renderer/containers/App';
import FileSystem from './renderer/system/filesystem';
import { loadFile } from './actions';

store.subscribe(() => {
    let state = store.getState();
});

FileSystem.setFolder('A:/Images');
store.dispatch(loadFile(FileSystem.getRandomFile()))

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));