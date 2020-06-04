import React, { Component } from 'react';
import './AddReview.css';
import ReviewsList from '../ReviewsList/ReviewsList';

class AddReview extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_content: ''
            }
    }


    handleNameChange = (event) => {
        this.setState({
            user_name: event.target.value
        })
    }
    
    handleReviewSubmit = () => {
        let newReview = {
            user_name: this.state.user_name.value,
            user_content: this.state.user_content.value,
        }
    }

    validateUserName = () => {
        let userName = this.state.user_name.value.trim();
        if (!this.state.user_name.touched) {
            return
        }
        if (userName.length === 0) {
            return 'Please enter a name';
        }
    }

    validateUserContent = () => {
        let userContent = this.state.user_content.value.trim();
        if (!this.state.user_content.touched) {
            return
        }
        if (userContent.length === 0) {
            return 'Please enter some thoughts';
        }
    }

    render () {
        return (
            <div className="create-review">
                <h3>Write a Review About This Course</h3>
                <form onSubmit={this.handleReviewSubmit}>
                    <div className="section">
                        <label className="name-label">
                            Your Name:
                        </label>
                        &nbsp; &nbsp;
                        <input 
                            className="name-input" 
                            type="text"
                            user_name={this.state.user_name}
                            onChange={this.handleNameChange} 
                            required 
                        />
                    </div>
                    <div className="section">
                        <label>
                            Rating:
                        </label>
                        &nbsp; &nbsp;
                        <select required>
                            <option value="1">5</option>
                            <option value="2">4</option>
                            <option value="3">3</option>
                            <option value="4">2</option>
                            <option value="5">1</option>
                        </select>
                    </div>
                    <div className="review_section">
                        <textarea className="review-text" placeholder="Your Thoughts..." required />
                    </div>
                    <input type="submit" value="Add Review" />
                </form>
                <section className="reviews" >
                    <h4>Reviews</h4>
                    <ReviewsList 
                        userReview={this.state.user_name}
                        userContent={this.state.user_content}
                    />
                </section>
            </div>
        );
    }
}

export default AddReview;