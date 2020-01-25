import React, { Component } from 'react';
import Content from './Viewer/Content';
import Likes from './Viewer/Likes';
import FileSystem from '../system/filesystem';

export default class Viewer extends Component {
    onKeyDown(e) {
        let file = null;
        switch(e.keyCode) {
            case 40:
                if(this.props.list.length === 0) {
                    break;
                }
                let i = this.props.index - 1;
                if(i < 0) {
                    i = this.props.list.length - 1;
                } else if(i > this.props.list.length - 1) {
                    i = 0;
                }
                file = this.props.list[i];
                this.props.fileLoaded(file);
                break;
            case 37: // left
                this.props.fileLoaded(FileSystem.getPrevFile(this.props.file));
                break;
            case 38: // up
                this.props.fileLoaded(FileSystem.getRandomFile());
                break;
            case 39: // right
                this.props.fileLoaded(FileSystem.getNextFile(this.props.file));
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