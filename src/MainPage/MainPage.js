import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';
import Map from '../Map/Map';
import './MainPage.css';


class MainPage extends Component {
    
    render () {
        
        return (
            <div className="flex-container">
                <div className="mainpage" >
                <SearchForm
                    setCourses={this.props.setCourses}
                    searchZip={this.props.searchZip}
                    filterOption={this.props.filterOption}
                    handleUpdate={this.props.updateSearchZip}/>
                <ResultsList
                    
                    
                    courses={this.props.courses}    
                    searchZip={this.props.searchZip}
                    filterOption={this.props.filterOption}/>
                </div>
                <section className="map-section">                    
                <Map
                    courses={this.props.courses} 
        
                />
                </section> 
            </div>   
        );
    };
};

export default MainPage;