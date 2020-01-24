import React, { Component } from 'react';
import Viewer from '../containers/Viewer';

export default class App extends Component {

    onKeyDown = (e) => {
        e.preventDefault();
        this.props.onKeyDown(e);
    };
    
    onLoad = () => {
        this.props.onLoad();
    }

    componentDidMount() {
        if(this.props.onKeyDown) {
            window.addEventListener('keydown', this.onKeyDown)
        }
        if(this.props.onLoad) {
            window.addEventListener('load', this.onLoad);
        }
    }

    render() {
        return <Viewer />;
    }
}