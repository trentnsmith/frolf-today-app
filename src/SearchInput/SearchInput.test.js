import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchInput from './SearchInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});