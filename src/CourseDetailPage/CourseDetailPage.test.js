import React from 'react';
import ReactDOM from 'react-dom';
import CourseDetailPage  from './CourseDetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourseDetailPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});