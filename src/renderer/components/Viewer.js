import React, { Component } from 'react';
import Content from './Viewer/Content';
import Likes from './Viewer/Likes';
import FileSystem from '../system/filesystem';

export default class Viewer extends Component {

    loadRandomFile() {
        this.props.loadFile(FileSystem.getRandomFile());
    }

    onKeyDown(e) {
        switch(e.keyCode) {
            case 38: // up
                this.loadRandomFile();
                break;
            case 75: // k
                this.props.file.dislike();
                this.props.updateLikes(this.props.file.likes);
                break;
            case 76: // l
                this.props.file.like();
                this.props.updateLikes(this.props.file.likes);
                break;
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    render() {
        return (
            <div className="Viewer" onKeyPress={this.props.onKeyPress}>
                <Content src={this.props.src} type={this.props.type} zoom={this.props.zoom} x={this.props.x} y={this.props.y} />
                <Likes amount={this.props.likes} />
            </div>
        );
    }
}