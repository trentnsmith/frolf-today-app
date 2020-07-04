import React, { Component } from 'react';
import CourseContext from '../CourseContext';
import { Link } from 'react-router-dom';
import ValidationError from '../Validation';
import config from '../config';
import './AddCourse.css';

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
            value: 'Nebraska',
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
        courseNameError: '',
    };

    static contextType = CourseContext;

    handleCourseName = (e) => {
        let {course_name} = this.state;
        course_name.value = e.target.value;
        this.setState({course_name});
    };
    handleHoles = (e) => {
        let {holes} = this.state;
        holes.value = e.target.value;
        this.setState({holes});
    };
    handleZipcode = (e) => {
        let {zipcode} = this.state;
        zipcode.value = e.target.value;
        this.setState({zipcode});
    };
    handleCity = (e) => {
        let {city} = this.state;
        city.value = e.target.value;
        this.setState({city});
    };
    
    handleBaskets = (e) => {
        let {basket_types} = this.state;
        basket_types.value = e.target.value;
        this.setState({basket_types});
    };
    handleTees = (e) => {
        let {tee_types} = this.state;
        tee_types.value = e.target.value;
        this.setState({tee_types});
    };
    handleDescription = (e) => {
        let {description} = this.state;
        description.value = e.target.value;
        this.setState({description});
    };
    handlePrivate = (e) => {
        let {private_course} = this.state;
        private_course.value = e.target.value;
        this.setState({private_course});
    };
    handleLatitude = (e) => {
        let {latitude} = this.state;
        latitude.value = e.target.value;
        this.setState({latitude});
    };
    handleLongitude = (e) => {
        let {longitude} = this.state;
        longitude.value = e.target.value;
        this.setState({longitude});
    };
    handleWebsiteTitle = (e) => {
        let {website_title} = this.state;
        website_title.value = e.target.value;
        this.setState({website_title});
    };
    handleWebsiteUrl = (e) => {
        let {website_url} = this.state;
        website_url.value = e.target.value;
        this.setState({website_url});
    };
    handleLength = (e) => {
        let {course_length} = this.state;
        course_length.value = e.target.value;
        this.setState({course_length});
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
        }
        if  (
            this.validateName() === undefined &&
            this.validateZipcode() === undefined &&
            this.validateCity() === undefined &&
            this.validateLat() === undefined &&
            this.validateLong() === undefined &&
            this.validateHoles() === undefined &&
            this.validateLength() === undefined 
            ) {
            fetch(`${config.API_ENDPOINT}/courses`, 
                {   method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(newCourse)})
            .then((response) => {
                return response.json();
            })
            .then((savedCourse) => {
                this.props.history.push('/search-page')
                this.context.addCourse(savedCourse)
                
            })
            .catch((error) => {
                console.log(error)
            });      
        } else {
            this.state.course_name.touched = true
            this.state.zipcode.touched = true
            this.state.city.touched = true
            this.state.latitude.touched = true
            this.state.longitude.touched = true
            this.state.holes.touched = true
            this.state.course_length.touched = true
        };
    };

    validateName = () => {
        let name = this.state.course_name.value.trim();
        if (!this.state.course_name.touched) {
            return 
        };
        if (name.length < 3) {
            return 'Course name is required';
        };
        return true
    };

    validateZipcode = () => {
        let zip = this.state.zipcode.value.trim();
        if (!this.state.zipcode.touched) {
            return 
        };
        if (zip.length < 5 || zip.length > 5) {
            return 'Zipcode must be 5 digits'
        };
        return true
    };

    validateCity = () => {
        let city = this.state.city.value.trim();
        if (!this.state.city.touched) {
            return 
        };
        if (city.length < 3) {
            return "City must be at least 3 digits"
        };
        return 
    };

    validateLat = () => {
        let lat = this.state.latitude.value.trim();
        if (!this.state.latitude.touched) {
            return 
        };
        if (lat.length < 5) {
            return 'Latitude must be numeric';
        };
        return true
    };

    validateLong = () => {
        let long = this.state.longitude.value.trim();
        if (!this.state.longitude.touched) {
            return 
        };
        if (long.length < 5) {
            return 'Longitude must be numeric';
        };
        return true
    };

    validateLength = () => {
        let courselength = this.state.course_length.value.trim();
        if (!this.state.course_length.touched) {
            return 
        };
        if (courselength.length < 5) {
            return "Course Length must be a number"
        };
        return true
    };

    validateHoles = () => {
        let holes = this.state.holes.value.trim();
        if (!this.state.holes.touched) {
            return 
        };
        if (holes.length < 5) {
            return "Holes must be a number"
        };
        return true
    };



    render () {
        return (
            <div className="container">
            <div className="create_course">
                <h2>Add a new course</h2>
                <form onSubmit={this.handleFormSubmit} className="addcourse_form">
                    <section className="section">
                    <div className="name_section">
                        <label className="name_label">
                            Course Name
                        </label>
                        <div>
                            <input className="name_input" type="text" onChange={this.handleCourseName}  />
                            
                            <ValidationError message={this.validateName()}/>
                        </div>
                    </div>
                    <div className="location_section">
                        <label className="location_zipcode">
                            Zipcode
                        </label>
                        <div>
                            <input className="zipcode_input" type="text" onChange={this.handleZipcode}  />
                            <ValidationError message={this.validateZipcode()} />
                        </div>
                    </div>
                    <div>
                        <label className="location_city">
                            City
                        </label>
                        <div>
                            <input className="city_input" type="text" onChange={this.handleCity} />
                            <ValidationError message={this.validateCity()} />
                        </div>
                    </div>
                    <div>
                        <label className="location_state">
                            State
                        </label>
                        <div>
                            <input className="state_input" type="text" value="Nebraska"/>
                        </div>
                    </div>
                    <div>
                        <label className="location_latitude">
                            Latitude
                        </label>
                        <div>
                            <input className="latitude _input" type="text" onChange={this.handleLatitude} />
                            <ValidationError message={this.validateLat()} />
                            
                        </div>
                    </div>
                    <div>
                        <label className="location_longitude">
                            Longitude
                        </label>
                        <div>
                            <input className="longitude _input" type="text" onChange={this.handleLongitude} />
                            <ValidationError message={this.validateLong()} />
                        </div>
                    </div>
                    </section>
                    <section className="section">
                    <div>
                        <label className="location_website">
                            Website Title
                        </label>
                        <div>
                            <input className="website _input" type="text" onChange={this.handleWebsiteTitle} />
                        </div>
                    </div>
                    <div>
                        <label className="location_latitude">
                            Website URL
                        </label>
                        <div>
                            <input className="website_input" type="text" onChange={this.handleWebsiteUrl} />
                        </div>
                    </div>
                    <div>
                        <label className="location_latitude">
                            Course length (ft)
                        </label>
                        <div>
                            <input className="latitude _input" type="text" onChange={this.handleLength} />
                            <ValidationError message={this.validateLength()} />
                        </div>
                    </div>
                    <div>
                        <label className="details_holes">
                            # of Holes
                        </label>
                        <div>
                            <input className="holes_input" type="text" onChange={this.handleHoles} />
                            <ValidationError message={this.validateHoles()} />
                        </div>
                    </div>
                    <div>
                        <label className="details_baskets">
                            Basket Type
                        </label>
                        <div>
                            <input className="basket_input" type="text" onChange={this.handleBaskets} />
                        </div>
                    </div>
                    <div>
                        <label className="details_tees">
                            Type of Tees
                        </label>
                        <div>
                            <select className="tee_input" type="text" onChange={this.handleTees}>
                                <option value={null} selected></option>
                                <option value='grass'>Grass</option>
                                <option value='cement'>Cement</option>
                                <option value='dirt'>Dirt</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="details_private">
                            Private Course
                        </label>
                        <div>
                            <select type="text" onChange={this.handlePrivate}>
                                <option value={null} selected></option>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>   
                        </div>
                    </div>
                    </section>
                    <section className="section">
                    <div className="description_section">
                        <textarea onChange={this.handleDescription} placeholder="Description of the course..."/>
                    </div>

                    <div className="submit_section">
                        <input 
                            className="form_submit" 
                            type="submit" 
                            value="Add Course" 
                            disabled={
                                !this.validateLat()
                            }
                    />
                    </div>
                    </section>
                </form>
            </div>
            <div className="goback_section">
                        <Link className="goback_link" to='/search-page'>
                            Go Back
                        </Link>
            </div>
            </div>
        );
    };
};

export default AddCourse;