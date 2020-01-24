import React, { Component } from 'react';
import Viewer from '../containers/Viewer';

export default class App extends Component {

    onKeyPress = (e) => {
        e.preventDefault();
        this.props.onKeyPress(e);
    };
    
    onLoad = () => {
        this.props.onLoad();
    }

    componentDidMount() {
        if(this.props.onKeyPress) {
            window.addEventListener('keypress', this.onKeyPress)
        }
        if(this.props.onLoad) {
            window.addEventListener('load', this.onLoad);
        }
    }

    render() {
        return <Viewer />;
    }
}