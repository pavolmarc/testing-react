import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/upjs/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders link', () => {
//   render(<App />);
//   const img = screen.getByAltText(/logo/i);
//   expect(img).toBeInTheDocument();
// });

