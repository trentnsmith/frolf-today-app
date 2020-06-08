import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
//import ReviewsList from '../ReviewsList/ReviewsList';
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

    handleBackToResults = (e) => {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/courses?zip=${this.props.searchZip}`)
        .then((response) => {
            console.log('this is the response', response)
            return response.json()
        })
        
        .then(data => {

            this.props.setCourses(data.courses)
            console.log('this is data', data.courses)
            console.log(this.props)
            this.props.history.push('/')
        })
        
        .catch(console.error)
    }

    render () {       
        console.log('this is searcZip', this.props.searchZip)
        console.log(this.props.match.params)
        let filteredCourse = this.context.courses.filter(course => {
            return course.course_id == this.props.match.params.courseId
        })
        console.log(this.context.courses)

        let name, holes, description, access, tees, course_length, baskets, website, website_link

        if (this.context.courses.length) {
            console.log('whatever you want')
          name = filteredCourse[0].course_name;
          description = filteredCourse[0].course_description;
          holes = filteredCourse[0].holes;
          access = filteredCourse[0].private;
          tees = filteredCourse[0].tee_types;
          course_length = filteredCourse[0].total_length_of_course;
          baskets = filteredCourse[0].basket_types;
          website = filteredCourse[0].external_link_1_title;
          website_link =  filteredCourse[0].external_link_1_url;
        }
       

        return (
            <div>
                <div className="Detail">
                    
                    <h2 className="Detail__title">{name}</h2>
                    <div className="Detail__contact">
                        Private Course:  {access}
                    </div>
                    
                        <span className="Detail__holes">
                            # of Holes: {holes}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span className="Detail__tees">
                            Tee Types:  {tees}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="Detail__length">
                            Course Distance (ft):  {course_length}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="Detail__baskets">
                            Basket Type:  {baskets}
                        </span>
                    <div className="Detail__description">{description}</div>
                    <div className="website__title">
                        Website:
                        &nbsp; 
                        <a href={`${website_link}`} target="_blank">
                            {website}
                        </a>
                    </div>
                    
                </div>
                <div className="goback">
                    <p className="links">
                    <div  className="goback__link" onClick={this.handleBackToResults}>
                        Back to Results
                    </div>
                    </p>
                </div>
                

            </div>    
        );
    }
}

export default CourseDetailPage