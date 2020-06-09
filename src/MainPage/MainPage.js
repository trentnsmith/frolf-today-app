import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';
import Map from '../Map/Map';
import './MainPage.css'


class MainPage extends Component {
    
    render () {
        //console.log(this.props.match.params)
        return (
            <div>
                <div className="mainpage" >
                <SearchForm
                    setCourses={this.props.setCourses}
                    searchZip={this.props.searchZip}
                    filterOption={this.props.filterOption}
                    handleUpdate={this.props.updateSearchZip}/>
                <ResultsList
                    
                    //courseId={this.props.match.params.courseId}
                    courses={this.props.courses}    
                    searchZip={this.props.searchZip}
                    filterOption={this.props.filterOption}/>
                </div>
                <section>
                    
                <Map 
                    setCourses={this.props.setCourses}
                />
                </section> 
            </div>   
        );
    }
}

export default MainPage;