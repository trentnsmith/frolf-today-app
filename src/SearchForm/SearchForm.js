import React, { Component } from 'react';
import './SearchForm.css';
import SearchInput from '../SearchInput/SearchInput';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
    render() {
        return (
            <div className="SearchForm">
                <div className="SearchForm__heading">
                    <h1>Search for a Nebraska Disc Golf Course</h1>
                    <p>Enter your Nebraska zipcode below to find disc golf courses in your area</p>
                    <p>Check out the location of those courses on the map below</p>
                </div>
                <div className="SearchForm__controls">
                    <SearchInput 
                    setCourses={this.props.setCourses}
                    searchZip={this.props.searchZip}
                    handleUpdate={this.props.handleUpdate}/>
                    
                </div>
                 
            </div>
        );
    };
};

export default SearchForm;