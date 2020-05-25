import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import { Link } from 'react-router-dom';

class AddReview extends Component{
    state = {
        reviewer: {
            value: '',
            touched: false
        },
        rating: {
            value: '',
            touched: false
        },
        content: {
            value: '',
            touched: false
        }
    }

    static contextType = CourseContext;

    handleReviewer = (e) => {
        let {reviewer} = this.state
        reviewer.value = e.target.value
        this.setState({reviewer})
    }

    handleRating = (e) => {
        let {rating} = this.state
        rating.value = e.target.value
        this.setState({rating})
    }

    handleContent = (e) => {
        let {content} = this.state
        content.value = e.target.value
        this.setState({content})
    }

    render () {
        return (
            <section className="create-review">
                <h2>Write a Review About This Course</h2>
                <form   >
                    <div className="section">
                        <label className="name-label">
                            Your Name:
                        </label>
                        <input className="name-input" type="text" required />
                    </div>
                    <div className="section">
                        <label>
                            Rating:
                        </label>
                        <select required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="section">
                        <label>
                            Your Thoughts:
                        </label>
                        <textarea required />
                    </div>
                </form>
            </section>
        );
    }
}

export default AddReview;