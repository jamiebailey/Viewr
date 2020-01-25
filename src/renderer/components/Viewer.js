import React, { Component } from 'react';
import Content from './Viewer/Content';
import Likes from './Viewer/Likes';
import FileSystem from '../system/filesystem';

export default class Viewer extends Component {

    previousShown() {
        if(this.props.list.length === 0) {
            return;
        }
        let i = this.props.index - 1;
        if(i < 0) {
            i = this.props.list.length - 1;
        } else if(i > this.props.list.length - 1) {
            i = 0;
        }
        this.props.fileLoaded(this.props.list[i]);
    }

    nextShown() {
        if(this.props.list.length === 0) {
            return;
        }
        let i = this.props.index + 1;
        if(i > this.props.list.length - 1) {
            i = 0;
        }
        this.props.fileLoaded(this.props.list[i]);
    }

    previousFile() {
        this.props.fileLoaded(FileSystem.getPrevFile(this.props.file));
    }

    nextFile() {
        this.props.fileLoaded(FileSystem.getNextFile(this.props.file));
    }

    random() {
        this.props.fileLoaded(FileSystem.getRandomFile());
    }

    onKeyDown(e) {
        let file = null;
        switch(e.keyCode) {
            case 45: // numpad 0
                this.random();
                break;
            case 40: // numpad down
                this.previousShown();
                break;
            case 37: // numpad left
                this.previousFile();
                break;
            case 38: // numpad up
                this.nextShown();
                break;
            case 39: // numpad right
                this.nextFile();
                break;
            case 109: // numpad +
                this.props.file.dislike();
                this.props.updateLikes(this.props.file.likes);
                break;
            case 107: // numpad -
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