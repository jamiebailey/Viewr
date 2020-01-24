import React, { Component } from 'react';
import Viewer from '../containers/Viewer';

export default class App extends Component {

    onKeyPress = (e) => {
        e.preventDefault();
        this.props.onKeyPress(e);
    };

    componentDidMount() {
        if(this.props.onKeyPress) {
            window.addEventListener('keypress', this.onKeyPress)
        }
    }

    render() {
        return <Viewer />;
    }
}