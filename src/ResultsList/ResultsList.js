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
*/
    render () {
        let filteredCourses = this.context.courses
        if (this.props.courseId) {
            filteredCourses = filteredCourses.filter((course) => {
                return course.courseId === parseInt(this.props.courseId)
            })
        }      
            return (
            /*<div className="ResultsList">
                {list}
            </div>
           */
          <div>
              {filteredCourses.map((course) => {
                  return(
                        <div className="ResultsList">
                            <Course
                                name={course.name}
                                courseId={course.courseId}
                                rating={course.rating}
                                holes={course.holes}
                                zip={course.zip}
                            />
                        </div>      
                  )
              })}
          </div> 
        );
    }
}

export default ResultsList;