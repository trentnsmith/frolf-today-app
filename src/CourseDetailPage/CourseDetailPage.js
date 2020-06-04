import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
import ReviewsList from '../ReviewsList/ReviewsList';
import './CourseDetailPage.css';
import AddReview from '../AddReview/AddReview';


class CourseDetailPage extends Component {
    render () {
        console.log(this.props.match.params)
        let course = this.props.courses.filter(course => {
            return course.courseId == this.props.match.params.courseId
        })
        console.log(course)
        let { name, rating, holes, description } = course[0]
        return (
            <div>
                <div className="Detail">
                    <h2 className="Detail__title">{name}</h2>
                    <div className="Detail__address">
                        
                    </div>
                    <span className="Detail__rating">
                        Average Rating: {rating}
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span className="Detail__holes">
                        # of Holes: {holes}
                    </span>
                    <div className="Detail__description">{description}</div>
                </div>
                <div className="goback">
                    <p className="links">
                    <Link className="goback__link" to='/'>
                        Back to Results
                    </Link>
                    </p>
                </div>
                <div className="reviews__list">
                    <AddReview />
                </div>

            </div>    
        );
    }
}

export default CourseDetailPage