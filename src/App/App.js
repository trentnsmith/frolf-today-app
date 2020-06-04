import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CourseContext from '../CourseContext';
//import COURSES from '../courses';
import Nav from '../Nav/Nav';
import CourseDetailPage from '../CourseDetailPage/CourseDetailPage';
import MainPage from '../MainPage/MainPage';
//import AddReview from '../AddReview/AddReview';
import './App.css'

class App extends Component {
  state = {
      searchZip: '',
      filterOption: 'All',
      courses: []
    };

  updateSearchZip = (zip) => {
    this.setState({
      searchZip: zip
    })
  }
  render() {
    let value = {
      courses: this.state.courses,
      updateSearchZip: this.updateSearchZip
    }
    return (
      <CourseContext.Provider value={value}>
        <main className='App'>
          <Nav />
          <BrowserRouter>
            <Route exact path ='/' render={() => {
              return <MainPage  
                        searchZip={this.state.searchZip}
                        filterOption={this.state.filterOption}
                        updateSearchZip={this.updateSearchZip}
                        courses={this.state.courses}
                      />
            }} />
            <Route path='/course/:courseId' render={(renderProp) => {
              return <CourseDetailPage 
                        courses={this.state.courses}
                        {...renderProp}
                      />
            }} />
          </BrowserRouter>    
        </main>
      </CourseContext.Provider>
    );
  }
}

export default App;
