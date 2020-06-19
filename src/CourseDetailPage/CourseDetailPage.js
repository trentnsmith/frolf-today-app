import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import './CourseDetailPage.css';
import config from '../config';


class CourseDetailPage extends Component {
    static contextType = CourseContext;

    componentDidMount () {
        let getCourseDescription = () => {
            console.log('this.props', this.props)
            fetch(`${config.API_ENDPOINT}/courses?course_id=${this.props.match.params.courseId}`)
            .then((response) => {
               
                return response.json()
            })            
            .then(data => {
                this.context.setCourses(data.courses)
               
            })
            .catch(console.error)
        }
        getCourseDescription()
    };

    handleBackToResults = (e) => {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/courses?zip=${this.props.searchZip}`)
        .then((response) => {
            
            return response.json()
        })
        .then(data => {

            this.props.setCourses(data.courses)
            
            this.props.history.push('/')
        })
        .catch(console.error)
    };

    render () {       
        let filteredCourse = this.context.courses.filter(course => {
            return course.course_id == this.props.match.params.courseId
        });

        let name, holes, description, access, tees, course_length, baskets, website, website_link;

        if (this.context.courses.length) {
            
          name = filteredCourse[0].course_name;
          description = filteredCourse[0].course_description;
          holes = filteredCourse[0].holes;
          access = filteredCourse[0].private;
          tees = filteredCourse[0].tee_types;
          course_length = filteredCourse[0].total_length_of_course;
          baskets = filteredCourse[0].basket_types;
          website = filteredCourse[0].external_link_1_title;
          website_link =  filteredCourse[0].external_link_1_url;
        };
       

        return (
            //Displaying decriptive data for the selected course
            //onCLick function to go back to the results
            <div>
                <div className="Detail">
                    <h2 className="Detail__title">{name}</h2>
                    <div className="Description">
                        <div className="Detail__access">
                            Private Course:  {access}
                        </div>
                        <div className="Detail__holes">
                            # of Holes: {holes}
                        </div>
                        
                        <div className="Detail__tees">
                            Tee Types:  {tees}
                        </div>
                        
                        <div className="Detail__length">
                            Course Distance (ft):  {course_length}
                        </div>
                        
                        <div className="Detail__baskets">
                            Basket Type:  {baskets}
                        </div>

                        <div className="Detail__description">{description}</div>
                        <div className="website__title">
                            Website:
                            &nbsp; 
                            <a href={`${website_link}`} target="_blank" className="website__link">
                                {website}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="goback">
                    <div  className="goback__link" onClick={this.handleBackToResults}>
                        Back to Results
                    </div>
                </div>
                

            </div>    
        );
    };
};

export default CourseDetailPage;