/* eslint-disable testing-library/no-render-in-setup */
// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zero = screen.getByText('0');
  expect(zero).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plus = screen.getByText('+', {exact: false});
  expect(plus).toBeInTheDocument();

  fireEvent.click(plus);
  const one = screen.getByText('1');
  expect(one).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minus = screen.getByText('-', {exact: false});
  expect(minus).toBeInTheDocument();

  fireEvent.click(minus);
  const zero = screen.getByText('-1');
  expect(zero).toBeInTheDocument();
});
