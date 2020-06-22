import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import { Link } from 'react-router-dom';
import ValidationError from '../Validation';
import config from '../config';

class AddCourse extends Component {
    state = {
        course_name: {
            value: '',
            touched: false
        },
        holes: {
            value: '',
            touched: false
        },
        zipcode: {
            value: '',
            touched: false
        },
        city: {
            value: '',
            touched: false
        },
        state_name: {
            value: '',
            touched: false
        },
        basket_types: {
            value: '',
            touched: false
        },
        tee_types: {
            value: '',
            touched: false
        },
        description: {
            value: '',
            touched: false
        },
        private_course: {
            value: '',
            touched: false
        },
        latitude: {
            value: '',
            touched: false
        },
        longitude: {
            value: '',
            touched: false
        },
        website_title: {
            value: '',
            touched: false
        },
        website_url: {
            value: '',
            touched: false
        },
        course_length: {
            value: '',
            touched: false
        },
    };

    static contextType = CourseContext;

    handleCourseName = (e) => {
        let {course_name} = this.state
        course_name.value = e.target.value
        this.setState({course_name})
    };
    handleHoles = (e) => {
        let {holes} = this.state
        holes.value = e.target.value
        this.setState({holes})
    };
    handleZipcode = (e) => {
        let {zipcode} = this.state
        zipcode.value = e.target.value
        this.setState({zipcode})
    };
    handleCity = (e) => {
        let {city} = this.state
        city.value = e.target.value
        this.setState({city})
    };
    handleStateName = (e) => {
        let {state_name} = this.state
        state_name.value = e.target.value
        this.setState({state_name})
    };
    handleBaskets = (e) => {
        let {basket_types} = this.state
        basket_types.value = e.target.value
        this.setState({basket_types})
    };
    handleTees = (e) => {
        let {tee_types} = this.state
        tee_types.value = e.target.value
        this.setState({tee_types})
    };
    handleDescription = (e) => {
        let {description} = this.state
        description.value = e.target.value
        this.setState({description})
    };
    handlePrivate = (e) => {
        let {private_course} = this.state
        private_course.value = e.target.value
        this.setState({private_course})
    };
    handleLatitude = (e) => {
        let {latitude} = this.state
        latitude.value = e.target.value
        this.setState({latitude})
    };
    handleLongitude = (e) => {
        let {longitude} = this.state
        longitude.value = e.target.value
        this.setState({longitude})
    };
    handleWebsiteTitle = (e) => {
        let {website_title} = this.state
        website_title.value = e.target.value
        this.setState({website_title})
    };
    handleWebsiteUrl = (e) => {
        let {website_url} = this.state
        website_url.value = e.target.value
        this.setState({website_url})
    };
    handleLength = (e) => {
        let {course_length} = this.state
        course_length.value = e.target.value
        this.setState({course_length})
    };
    
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        let newCourse = {
            course_name: this.state.course_name.value,
            holes: this.state.holes.value,
            zipcode: this.state.zipcode.value,
            city: this.state.city.value,
            state_name: this.state.state_name.value,
            basket_types: this.state.basket_types.value,
            tee_types: this.state.tee_types.value,
            description: this.state.description.value,
            private_course: this.state.private_course.value,
            latitude: this.state.latitude.value,
            longitude: this.state.longitude.value,
            website_title: this.state.website_title.value,
            website_url: this.state.website_url.value,
            course_length: this.state.course_length.value
        };
        if (this.state.course_name) {
            fetch(`${config.API_ENDPOINT}/courses`, 
                {   method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(newCourse)})
            .then((response) => {
                return response.json();
            })
            .then((savedCourse) => {
                this.props.history.push('/')
                this.context.addCourse(savedCourse)
                
            })
            .catch((error) => {
                console.log(error)
            })        
        } else {
            alert('Please enter something')
        }
    };

    validateName = () => {
        let name = this.state.course_name.value.trim();
        if (!this.state.course_name.touched) {
            return
        }
        if (name.length === 0) {
            return 'Course name is required';
        }
    };


    render () {
        return (

            <section className="creat_course">
                <h2>Add a new course</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="name_section">
                        <label className="name_label">
                            Course Name
                        </label>
                        <input className="name_input" type="text" onChange={this.handleCourseName} required />
                        <ValidationError message={this.validateName()} />
                    </div>

                    <div className="location_section">
                        <label className="location_zipcode">
                            Zipcode
                        </label>
                        <input className="zipcode_input" type="text" onChange={this.handleZipcode} required />
                        <label className="location_city">
                            City
                        </label>
                        <input className="city_input" type="text" onChange={this.handleCity} />
                        <label className="location_state">
                            State
                        </label>
                        <input className="state_input" type="text" onChange={this.handleStateName} />
                        <label className="location_latitude">
                            Latitude
                        </label>
                        <input className="latitude _input" type="text" onChange={this.handleLatitude} />
                        <label className="location_longitude">
                            Longitude
                        </label>
                        <input className="longitude _input" type="text" onChange={this.handleLongitude} />
                        <label className="location_website">
                            Website Title
                        </label>
                        <input className="website _input" type="text" onChange={this.handleWebsiteTitle} />
                        <label className="location_latitude">
                            Website URL
                        </label>
                        <input className="website_input" type="text" onChange={this.handleWebsiteUrl} />
                        <label className="location_latitude">
                            Course length
                        </label>
                        <input className="latitude _input" type="text" onChange={this.handleLength} />
                    </div>

                    <div className="details_section">
                        <label className="details_holes">
                            Holes
                        </label>
                        <input className="holes_input" type="text" onChange={this.handleHoles} />
                        <label className="details_baskets">
                            Baskets
                        </label>
                        <input className="basket_input" type="text" onChange={this.handleBaskets} />
                        <label className="details_tees">
                            Type of Tees
                        </label>
                        <input className="tee_input" type="text" onChange={this.handleTees} />
                        <label className="details_private">
                            Private Course
                        </label>
                        <input className="private_input" type="text" onChange={this.handlePrivate} />
                    </div>

                    <div className="description_section">
                        <textarea onChange={this.handleDescription} />
                    </div>

                    <div className="submit_section">
                        <input className="form_submit" type="submit" value="Add Course" />
                    </div>

                    <div className="goback_section">
                        <Link className="goback_link" to='/'>
                            Go Back
                        </Link>
                    </div>

                </form>
            </section>

        );
    };
};

export default AddCourse;