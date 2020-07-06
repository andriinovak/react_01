import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MainAppWithWrapper from './App';
import ReactDOM from 'react-dom'


// test('renders learn react link', () => {
//   const { getByText } = render(<MainAppWithWrapper />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('some test App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainAppWithWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
