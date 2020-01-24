import React, { Component } from 'react';

export default class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                [r] random,
                [l] like,
                [k] dislike,
                [o] open
            </div>
        );
    }
}