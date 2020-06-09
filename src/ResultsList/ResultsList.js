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
            })
        }
        console.log('context courses', this.context.courses)
        return (
            <div className="ResultsList">
                {filteredCourses.length === 0 ? (<div>No results found, please try another zipcode</div>)
                : filteredCourses.map(course => {
                    return (
                    <Course
                        searchZip={this.props.searchZip}
                        key={course.course_id}
                        name={course.course_name}
                        courseId={course.course_id}
                        holes={course.holes}
                        zip={course.postal_code}
                />
                );
            })}    
            </div>      
        );
    }
}

export default ResultsList;