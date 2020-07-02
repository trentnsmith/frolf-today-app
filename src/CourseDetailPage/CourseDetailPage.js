import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import { Link } from 'react-router-dom';
import './CourseDetailPage.css';
import config from '../config';


class CourseDetailPage extends Component {
    static contextType = CourseContext;


    render () {      
        
        let filteredCourse = this.context.courses.filter(course => {
            return course.id === parseInt(this.props.match.params.courseId)
        });
        
        let course = filteredCourse[0] || {}; 

        return (
            //Displaying decriptive data for the selected course
            <div>
                <div className="Detail">
                    <h2 className="Detail__title">{course.course_name}</h2>
                    <div className="Description">
                        <div className="Detail__access">
                            Private Course:  {course.private_course}
                        </div>
                        <div className="Detail__holes">
                            # of Holes: {course.holes}
                        </div>
                        
                        <div className="Detail__tees">
                            Tee Types:  {course.tee_types}
                        </div>
                        
                        <div className="Detail__length">
                            Course Distance (ft):  {course.course_length}
                        </div>
                        
                        <div className="Detail__baskets">
                            Basket Type:  {course.basket_types}
                        </div>

                        <div className="Detail__description">{course.description}</div>
                        <div className="website__title">
                            Website:
                            &nbsp; 
                            <a href={`${course.website_url}`} target="_blank" className="website__link">
                                {course.website_title}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="goback">
                    <Link  className="goback__link" to='/search-page'>
                        Back to Results
                    </Link>
                </div>
                

            </div>    
        );
    };
};

export default CourseDetailPage;