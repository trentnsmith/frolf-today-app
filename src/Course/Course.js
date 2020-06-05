import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
//import COURSES from '../courses';
import './Course.css'

class Course extends Component {
    static contextType = CourseContext;

    render () {
        let { courseId, name, rating, holes, zip } = this.props
        return (
            <div className="Course">
                <div className="Course__content">
                    <h2 className="Course__name">
                        <Link to={`/course/${courseId}`}>
                            {name}
                        </Link>
                    </h2>
                    <div className="Course__holes">
                        Number of Holes: &nbsp;
                        {holes}
                    </div>
                    <div className="Course__zip">
                        Zip Code: &nbsp;
                        {zip}
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;