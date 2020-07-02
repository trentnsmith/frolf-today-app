import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
import config from '../config';
import './Course.css';

class Course extends Component {
    static contextType = CourseContext;
    

    handleDeleteCourse = () => {
        fetch(`${config.API_ENDPOINT}/courses/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(event => Promise.reject(event))
        })
        .then(() => {
            this.context.deleteCourse(this.props.id)
        })
        .catch(error => {
            alert(error.message)
        });
    };

    render () {
        
        let { id, name, holes, city } = this.props;
        return (
            <div className="Course">
                <div className="Course__content">
                    <h2 className="Course__name">
                        <Link to={`/course/${id}`} className="Course__link">
                            {name}
                        </Link>
                    </h2>
                    <div className="Course__holes">
                        Number of Holes: &nbsp;
                        {holes}
                    </div>
                    <div className="Course__zip">
                        City: &nbsp;
                        {city}
                    </div>
                </div>
                <button
                    className="course_delete"
                    onClick={this.handleDeleteCourse}
                >
                    Remove    
                </button>    
            </div>
        );
    };
};

export default Course;