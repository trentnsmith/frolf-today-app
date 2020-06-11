import React, { Component } from 'react';
import config from '../config';
//import courses from '../courses';
import CourseContext from '../CourseContext';
import './SearchInput.css'

class SearchInput extends Component {
    static contextType = CourseContext;

    handleZipSubmit = (e) => {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/courses?zip=${this.props.searchZip}`)
        
        .then((response) => {
            //console.log('this is the response', response)
            return response.json()
        })
        
        .then(data => {
            //console.log('this is data', data)
            if (data.status === 2) {
                alert('No data returned. Please try a different zip code')
            } else
            this.props.setCourses(data.courses)
            //console.log('this is data', data.courses)
        })
        .catch(console.error)
        
    }

    render () {
        
        
        return (
            <div className="SearchInput">
                <form className="search-form" onSubmit={this.handleZipSubmit}>
                <input 
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
                <section>
                    
                </section>    
            </div>
        );
    }
}

export default SearchInput;