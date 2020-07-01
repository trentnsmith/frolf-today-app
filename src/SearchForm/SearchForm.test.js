import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './SearchForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SearchForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});