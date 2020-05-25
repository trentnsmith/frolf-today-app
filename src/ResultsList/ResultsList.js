import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import Course from '../Course/Course';

class ResultsList extends Component {
    static contextType = CourseContext;
   /* render() {
        const { searchZip, filterOption } = this.props;
        const list = this.props.files
            .filter(file => file.name.includes(searchZip)
                && (filterOption === 'All' || file.status === filterOption))
            .map((file, key) => <Course {...file} key={key} />)

    
        //let filteredCourses = this.context.courses
       
        if(!this.props.courseId) return null;
        console.log(courseId)
        let courses = this.context.courses
        let filteredCourses = courses.filter((course) => {
            return course.courseId === parseInt(this.props.courseId)
        })
        console.log(filteredCourses)
       /* if (this.props.courseId) { 
            let newfilteredCourses = filteredCourses.filter((course) => {
                return course.courseId === parseInt(this.props.courseId)
            })
        }
        console.log('this is the new filtered courses', newfilteredCourses)   
        */   
       render () {    
        const { courses } = this.context;

        return (
            <div className="ResultsList">
                {courses.map(course => {
                    return (
                    <Course
                        key={course.id}
                        name={course.name}
                        courseId={course.courseId}
                        rating={course.rating}
                        holes={course.holes}
                        zip={course.zip}
                />
                );
            })}    
            </div>      
        );
    }
}

export default ResultsList;