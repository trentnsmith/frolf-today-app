import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import Course from '../Course/Course';
import './ResultsList.css';

class ResultsList extends Component {
    
    static contextType = CourseContext;
                
       render () {    
         let filteredCourses = JSON.parse(JSON.stringify(this.context.courses));
         if (this.props.courseId) { 
            let filteredCourses = filteredCourses.filter((course) => {
                return course.courseId === parseInt(this.props.courseId)
            });
        };

        return (
            <div className="ResultsList">
                {filteredCourses.map(course => {
                    return (
                    <Course
                        searchZip={this.props.searchZip}
                        key={course.course_id}
                        name={course.course_name}
                        courseId={course.course_id}
                        holes={course.holes}
                        zip={course.postal_code}
                        city={course.city}
                />
                );
            })}    
            </div>      
        );
    };
};

export default ResultsList;