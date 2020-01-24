import React, { Component } from 'react';

export default class Likes extends Component {
    render() {
        return (
        <div className="Likes">Likes: {this.props.amount}</div>
        );
    }
}