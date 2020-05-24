import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CourseContext from '../CourseContext';
import COURSES from '../courses';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import ResultsList from '../ResultsList/ResultsList';
import CourseDetailPage from '../CourseDetailPage/CourseDetailPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchZip: '',
      filterOption: 'All',
      courses: [
        COURSES
      ]
    };
  }

  updateSearchZip(zip) {
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
            <SearchForm
              searchZip={this.state.searchZip}
              filterOption={this.state.filterOption}
              handleUpdate={zip=>this.updateSearchZip(zip)}/>
            <ResultsList
              courses={this.value}
              searchZip={this.state.searchZip}
              filterOption={this.state.filterOption}/>
            <Route path='/course/:courseId' component={CourseDetailPage} />
          </BrowserRouter>    
        </main>
      </CourseContext.Provider>
    );
  }
}

export default App;
