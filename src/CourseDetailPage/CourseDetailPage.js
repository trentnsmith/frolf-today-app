import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
import ReviewsList from '../ReviewsList/ReviewsList';
import courses from '../courses';
import Course from '../Course/Course';

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
                    <span className="Detail__rating">
                        Average Rating: {rating}
                    </span>
                    <span className="Detail__holes">
                        Number of Holes: {holes}
                    </span>
                    <div className="Detail__description">{description}</div>
                </div>
                <div className="goback">
                    <Link className="goback__link" to='/'>
                        Back to Results
                    </Link>
                    <Link className="goback__search" to='/'>
                        New Search
                    </Link>
                </div>
                <div className="reviews__list">
                    <ReviewsList />
                </div>

            </div>    
        );
    }
}

export default CourseDetailPage