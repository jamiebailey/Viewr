import React, { Component } from 'react';

export default class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                [num 0] random,
                [num +] like,
                [num -] dislike,
                [num 5] open,
                [num 4] prev file,
                [num 6] next file,
                [num 2] prev hist,
                [num 8] next hist
            </div>
        );
    }
}