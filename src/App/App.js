import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CourseContext from '../CourseContext';
import Nav from '../Nav/Nav';
import CourseDetailPage from '../CourseDetailPage/CourseDetailPage';
import MainPage from '../MainPage/MainPage';
import './App.css'


class App extends Component {
  //Setting state 
  state = {
      searchZip: '',
      filterOption: 'All',
      courses: []
    };

  //create function to handle this.setState for courses  
  setCourses = (courses) => {
    this.setState({
      courses
    });
  };

  //create function to handle this.setState for zip
  updateSearchZip = (zip) => {
    this.setState({
      searchZip: zip
    });
  };

  render() {
    let value = {
      courses: this.state.courses,
      setCourses: this.setCourses,
      updateSearchZip: this.updateSearchZip
    };
    return (
      <CourseContext.Provider value={value}>
        <main className='App'>
          <Nav />
          <BrowserRouter className="flex-container">
            <Route exact path ='/' render={() => 
              <MainPage 
                setCourses={this.setCourses}
                searchZip={this.state.searchZip}
                filterOption={this.state.filterOption}
                updateSearchZip={this.updateSearchZip}
                courses={this.state.courses}
              />
            } />
            <Route path='/course/:courseId' render={(renderProps)=> 
              <CourseDetailPage  
                {...renderProps}
                setCourses={this.setCourses}
                searchZip={this.state.searchZip}
              />}
            />
              
          </BrowserRouter>    
        </main>
      </CourseContext.Provider>
    );
  };
};

export default App;
