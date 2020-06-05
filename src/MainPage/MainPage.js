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
                    searchZip={this.props.searchZip}
                    filterOption={this.props.filterOption}
                    handleUpdate={zip=>this.props.updateSearchZip(zip)}/>
                <ResultsList
                
                    //courseId={this.props.match.params.courseId}
                    courses={this.props.courses}    
                    searchZip={this.props.searchZip}
                    filterOption={this.props.filterOption}/>
                </div>
                <section>
                    
                <Map />
                </section> 
            </div>   
        );
    }
}

export default MainPage;