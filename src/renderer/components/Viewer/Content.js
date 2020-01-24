import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        const src = this.props.src;
        const type = this.props.type;
        const zoom = this.props.zoom ?? 1;
        const x = this.props.x ?? 0;
        const y = this.props.y ?? 0;

        let style = {};
        style.width = (100 * zoom) + '%';
        style.height = (100 * zoom) + '%';
        style.left = x;
        style.top = y;
        let output = null;
        if(type === 'image') {
            output = <img src={src}></img>
        } else if(type === 'video') {
            output = <video src={src} autoPlay="autoplay" loop={true}></video>
        }
        return (
        <div className="Content" ref="Content" style={style}>{output}</div>
        );
    }
}