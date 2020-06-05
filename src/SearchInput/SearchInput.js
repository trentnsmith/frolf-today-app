import React, { Component } from 'react';
import config from '../config';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null
        }
    }

    handleZipSubmit = (e) => {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/courses?zip=${this.props.searchZip}`)
        .then((response) => {
            console.log('this is the response', response)
            return response.json()
        })
        
        .then(data => {
            this.setState({
                data
            })
            console.log('this is data', data)
        })
        .catch(console.error)
        
    }

    render () {
        return (
            <div className="SearchInput">
                <form className="search-form" onSubmit={this.handleZipSubmit}>
                <input 
                    placeholder="Enter ZIP" 
                    value={this.props.searchZip}
                    onChange={e => this.props.handleUpdate(e.target.value)}
                />
                <input 
                    type="submit" 
                    value="Search"
                />
                </form>         
            </div>
        );
    }
}

export default SearchInput;