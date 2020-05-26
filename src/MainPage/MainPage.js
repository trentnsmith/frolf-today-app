import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';
import Map from '../Map/Map';


class MainPage extends Component {
    
    render () {
        return (
            <div>
            <div className="mainpage">
            <SearchForm
                searchZip={this.props.searchZip}
                filterOption={this.props.filterOption}
                handleUpdate={zip=>this.props.updateSearchZip(zip)}/>
            <ResultsList
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