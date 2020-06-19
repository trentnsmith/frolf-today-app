import React from 'react';
import ReactDOM from 'react-dom';
import CourseDetailPage  from './CourseDetailPage';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
        <MemoryRouter initialEntries={["/courses/2"]}>
            <CourseDetailPage />
        </MemoryRouter>, 
        div
  );
  ReactDOM.unmountComponentAtNode(div);
});