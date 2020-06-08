import React, { Component } from 'react';

class Review extends Component {
    render () {
        return (
                <li>
                    {this.props.review.name} {this.props.review.content}
                </li>
        );
    }
}

export default Review;