import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input for cifra', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Type cifra/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders output for note name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Musical note name/i);
  expect(linkElement).toBeInTheDocument();
});
