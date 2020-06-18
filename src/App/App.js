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

  setCourses = (courses) => {
    console.log('these are the courses', courses)
    this.setState({
      courses
    })
  }

  updateSearchZip = (zip) => {
    this.setState({
      searchZip: zip
    })
  }
  render() {
    let value = {
      courses: this.state.courses,
      setCourses: this.setCourses,
      updateSearchZip: this.updateSearchZip
    }
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
  }
}

export default App;
