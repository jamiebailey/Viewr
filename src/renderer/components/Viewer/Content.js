import React, { Component } from 'react';

export default class Content extends Component {
    componentDidMount() {
        let winX = window.innerWidth;
        let winY = window.innerHeight;
    }

    render() {
        const src = this.props.src;
        const type = this.props.type;
        let output = null;
        if(type === 'image') {
            output = <img src={src}></img>
        } else if(type === 'video') {
            output = <video src={src}></video>
        }
        return (
        <div className="Content">{output}</div>
        );
    }
}