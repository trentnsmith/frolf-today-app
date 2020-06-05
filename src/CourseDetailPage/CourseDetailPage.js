import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
import ReviewsList from '../ReviewsList/ReviewsList';
import './CourseDetailPage.css';
import AddReview from '../AddReview/AddReview';
import config from '../config';


class CourseDetailPage extends Component {
    static contextType = CourseContext;

    componentDidMount () {
        let getCourseDescription = () => {
            fetch(`${config.API_ENDPOINT}/courses?course_id=${this.props.match.params.courseId}`)
            .then((response) => {
                console.log('this is the response', response)
                return response.json()
            })
            
            .then(data => {
                this.context.setCourses(data.courses)
                console.log('this is data', data)
            })
            .catch(console.error)
        }
        getCourseDescription()
    }

    render () {       

        console.log(this.props.match.params)
        let filteredCourse = this.context.courses.filter(course => {
            return course.course_id == this.props.match.params.courseId
        })
        console.log(this.context.courses)

        let name, rating, holes, description 

        if (this.context.courses.length) {
            console.log('whatever you want')
          name = filteredCourse[0].course_name;
          description = filteredCourse[0].course_description;
          holes = filteredCourse[0].holes;

        }

        return (
            <div>
                <div className="Detail">
                    
                    <h2 className="Detail__title">{name}</h2>
                    <div className="Detail__address">
                        
                    </div>
                    
                    <span className="Detail__holes">
                        # of Holes: {holes}
                    </span>
                    <div className="Detail__description">{description}</div>
                </div>
                <div className="goback">
                    <p className="links">
                    <Link className="goback__link" to='/'>
                        Back to Results
                    </Link>
                    </p>
                </div>
                <div className="reviews__list">
                    <AddReview />
                </div>

            </div>    
        );
    }
}

export default CourseDetailPage