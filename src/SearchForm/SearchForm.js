import React, { Component } from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchInput from '../SearchInput/SearchInput';

class SearchForm extends Component {
    render() {
        return (
            <div className="SearchForm">
                <div className="SearchForm__heading">
                    <h1>Search for a Disc Golf Course</h1>
                </div>
                <div className="SearchForm__controls">
                    <SearchInput 
                    searchZip={this.props.searchZip}
                    handleUpdate={this.props.handleUpdate}/>
                    <FilterOptions filterOption={this.props.filterOption}/>
                </div>
            </div>
        );
    }
}

export default SearchForm;