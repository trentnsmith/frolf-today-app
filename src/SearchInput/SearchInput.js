import React, { Component } from 'react';
import config from '../config';
import { Link } from 'react-router-dom';
import CourseContext from '../CourseContext';
import './SearchInput.css';

class SearchInput extends Component {
    static contextType = CourseContext;

    //function that handles making API based on the zipcode that is entered
    handleZipSubmit = (e) => {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/courses?zip=${this.props.searchZip}`)
        .then((response) => { 
            return response.json()
        })
        .then(data => {
            if (data.length === 0) {
                alert('There are no courses in that zipcode. Please try another Nebraska zipcode')
            } else
            this.props.setCourses(data) 
        })
        .catch(console.error)
        
    };

    render () {
        
        
        return (
            <div className="SearchInput">
                <form className="search-form" onSubmit={this.handleZipSubmit}>   
                <input 
                    htmlFor="enter zip"
                    className="Search__input"
                    placeholder="Enter ZIP" 
                    value={this.props.searchZip}
                    onChange={e => this.props.handleUpdate(e.target.value)}
                />
                <input 
                    type="submit" 
                    value="Search"
                    className="Search__button"
                />
                </form>     
                <div className="addcourse">
                    <Link className="addcourse_link" to={'/add-course'}>
                        Add A New Course
                    </Link>
                </div>      
            </div>
        );
    };
};

export default SearchInput;