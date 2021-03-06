import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import CourseDetailPage  from './CourseDetailPage';
import { Router } from 'react-router-dom';

it('renders without crashing', () => {
  let match = {
    params: {
      courseId: 2
    }
  }

  const history = createMemoryHistory()
  const route = '/course/2'
  history.push(route)
  const div = document.createElement('div');
  ReactDOM.render(
        <Router history={history}>
            <CourseDetailPage match={match} />
        </Router>, 
        div
  );
  ReactDOM.unmountComponentAtNode(div);
});