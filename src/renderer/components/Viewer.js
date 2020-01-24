import React, { Component } from 'react';
import Content from './Viewer/Content';
import Likes from './Viewer/Likes';

export default class Viewer extends Component {
    render() {
        return (
            <div className="Viewer" onKeyPress={this.props.onKeyPress}>
                <Content src={this.props.src} type={this.props.type} zoom={this.props.zoom} x={this.props.x} y={this.props.y} />
                <Likes amount={this.props.likes} />
            </div>
        );
    }
}