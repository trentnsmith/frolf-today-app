import React, { Component } from 'react';
import './ReviewsList.css';
import Review from '../Review/Review';

class ReviewsList extends Component {
    
    render () {
        return (
            <div >
                <Review />
            </div>
        );
    }
}

export default ReviewsList;