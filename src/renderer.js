import './scss/renderer.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './renderer/store';
import App from './renderer/containers/App';

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));