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
            return (
            /*<div className="ResultsList">
                {list}
            </div>
           */
          <div>
                  return(
                        <div className="ResultsList">
                            <Course
                                name={this.context.course.name}
                                courseId={course.courseId}
                                rating={course.rating}
                                holes={course.holes}
                                zip={course.zip}
                            />
                        </div>      
                  )
          </div> 
        );
    }
}

export default ResultsList;