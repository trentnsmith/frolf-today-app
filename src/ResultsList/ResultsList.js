import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import Course from '../Course/Course';
import './ResultsList.css';

class ResultsList extends Component {
    
    static contextType = CourseContext;
       //filtering through the JSON data that contain the matching courseId        
       render () {    
         let filteredCourses = JSON.parse(JSON.stringify(this.context.courses));
         if (this.props.courseId) { 
            let filteredCourses = filteredCourses.filter((course) => {
                return course.courseId === parseInt(this.props.courseId)
            });
        };

        return (
            //mapping over the filterCourse and passing the information to 
            //the Course component
            <div>
                <ul className="ResultsList">
                    {filteredCourses.map(course => {
                        return (
                        <li>
                        <Course
                            searchZip={this.props.searchZip}
                            id={course.id}
                            key={course.course_id}
                            name={course.course_name}
                            courseId={course.course_id}
                            holes={course.holes}
                            zip={course.postal_code}
                            city={course.city}
                    />
                    </li>
                    );
                })}    
                </ul>
                   
            </div>
        );
    };
};

export default ResultsList;