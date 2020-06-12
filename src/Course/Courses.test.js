import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Courses from './Course';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '123',
    name: 'test name',
    holes: 'test holes',
    city: 'test city',
  }
  ReactDOM.render(
    <BrowserRouter>
      <Courses {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});