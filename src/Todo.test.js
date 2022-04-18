import { render, screen } from '@testing-library/react';
import Todo from './Todo';


test('Header is displayed', () => {
  render(<Todo />);
  const element = screen.getByText("To-Do list")
  expect(element).toBeInTheDocument();
});

test('Find h2 element', () => {
  render(<Todo />);
  const headElement = screen.getByRole("heading")
  expect(headElement).toBeInTheDocument();
});

test('add task element is displayed', () => {
  render(<Todo />);
  const element = screen.queryByText("Add Task")
  expect(element).toBeInTheDocument();
});



