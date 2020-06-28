import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import AddCourse  from './AddCourse';
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
            <AddCourse match={match} />
        </Router>, 
        div
  );
  ReactDOM.unmountComponentAtNode(div);
});