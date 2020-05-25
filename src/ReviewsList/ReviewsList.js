import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewsList extends Component {
    render () {
        return (
            <div className="addreview">
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
                            Rate This Course:
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
            </div>
        );
    }
}

export default ReviewsList;