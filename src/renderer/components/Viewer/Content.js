import React, { Component } from 'react';

export default class Content extends Component {
    
    state = {
        zoom: 1,
        x: 0,
        y: 0
    };

    componentDidMount() {
        window.addEventListener('wheel', this.onWheel.bind(this));
    }

    onWheel(e) {
        let change = -e.deltaY * 0.0005;
        let elem = this.refs.Content;
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        this.setState(prevState => {
            return {
                zoom: prevState.zoom + change,
                x: prevState.x - (winW * change) / 2,
                y: prevState.y - (winH * change) / 2
            }
        });
    }

    render() {
        const src = this.props.src;
        const type = this.props.type;
        const zoom = this.state.zoom ?? 1;
        const x = this.state.x ?? 0;
        const y = this.state.y ?? 0;

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