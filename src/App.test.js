import { render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import { initializeTimes } from './components/Main';
import { reducer } from './components/Main';

test('renders the BookingForm heading', () => {
  render(<BookingPage />)
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct expected value', () => {
  const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedValue);
})

test('updateTimes changes available times based on selected date', () => {
  const initialState = {
    selectedDate: '2022-01-01',
    availableTime: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  }
  const selectedDate = '2022-01-02';

  const action = { type: 'UPDATE_TIMES', payload: selectedDate }
  const result = reducer(initialState, action);
  expect(result).toEqual({
    ...initialState,
    selectedDate: selectedDate
  })
})
