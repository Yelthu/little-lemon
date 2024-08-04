import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './components/BookingForm';
import { validateEmail } from './components/BookingForm';
import Main from './Components/Main';
// import { initializeTimes } from './components/Main';
// import { reducer } from './components/Main';


// Before API Migrated

// test('renders the BookingForm heading', () => {
//   render(<BookingPage />)
//   const headingElement = screen.getByText('Book Now');
//   expect(headingElement).toBeInTheDocument();
// })

// test('initializeTimes returns the correct expected value', () => {
//   const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   const result = initializeTimes();
//   expect(result).toEqual(expectedValue);
// })

// test('updateTimes changes available times based on selected date', () => {
//   const initialState = {
//     selectedDate: '2022-01-01',
//     availableTime: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
//   }
//   const selectedDate = '2022-01-02';

//   const action = { type: 'UPDATE_TIMES', payload: selectedDate }
//   const result = reducer(initialState, action);
//   expect(result).toEqual({
//     ...initialState,
//     selectedDate: selectedDate
//   })
// })

// Check HTML Attributes For Booking Form
test('Name field should have the required attribute', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText('Name:');
  expect(nameInput).toHaveAttribute('required');

  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toHaveAttribute('required');
})
test('Email field should have the required attribute', () => {
  render(<BookingForm />);

  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toHaveAttribute('required');
})
test('Booking Date field should have the required attribute', () => {
  render(<BookingForm />);

  const dateInput = screen.getByLabelText('Select a Date:');
  expect(dateInput).toHaveAttribute('required');
})
test('Booking Time field should have the required attribute', () => {
  render(<BookingForm />);

  const timeInput = screen.getByLabelText('Select Time:');
  expect(timeInput).toHaveAttribute('required');
})
test('No Of Guests field should have the required attribute', () => {
  render(<BookingForm />);

  const guestInput = screen.getByLabelText('Number of Guests:');
  expect(guestInput).toHaveAttribute('required');
})

test('Occasion field should have the required attribute', () => {
  render(<BookingForm />);

  const occasionInput = screen.getByLabelText('Occasion:');
  expect(occasionInput).toHaveAttribute('required');
})

// Check Email Format
test('validateEmail should return true for a valid email address', () => {
  render(<BookingForm />);

  const emailInput = screen.getByLabelText('Email:');
  userEvent.type(emailInput, 'test@example.com')
  const isValid = validateEmail(emailInput.value);

  expect(isValid).toBe(true);
})


// Used 'describe' rather than 'test' bcz I want to test the entire componet
//check BookingForm Component
// describe('<BookingForm />', () => {
//   test('submission is working properly', () => {
//     const handleSubmit = jest.fn();
//     render(<BookingForm submitForm={handleSubmit} />)

//     fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
//     fireEvent.change(screen.getByLabelText('Phone Number:'), { target: { value: '(123-) 456-7890' } });
//     fireEvent.change(screen.getByLabelText('Select a Date:'), { target: { value: '2024-08-19' } });
//     fireEvent.change(screen.getByLabelText('Select Time:'), { target: { value: '08:00 PM' } });
//     fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: '2' } });
//     fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Anniversary' } });

//     fireEvent.click(screen.getByText('Confirm Your Reservation'));

//     expect(handleSubmit).toHaveBeenCalledWith({
//       name: 'John Doe',
//       email: 'john@example.com',
//       occasion: 'Anniversary',
//       guests: '2',
//       date: '2024-08-19',
//       times: '08:00 PM', // It will be received the data from API
//       phoneNumber: '(123-) 4567890',
//     })

//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//   })
// })

// Check API
// jest.mock('./api', () => ({
//   submitAPI: jest.fn(),
// }))

//  check Main Component
// describe('<Main />', () => {
//   test('submission is working properly to Main', () => {

//     const formData = { occasion: 'Anniversary', guests: '2', date: '2024-08-19', times: '20:00', phoneNumber: '(123) 456-7890' };
//     render(<Main />)

//     fireEvent.click(screen.getByText('Confirm Your Reservation'));

//     expect(submitAPI).toHaveBeenCalledWith(formData);
//   })
// })