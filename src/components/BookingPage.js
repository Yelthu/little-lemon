import BookingForm from './BookingForm';

const BookingPage = (props) => {

    const { availableTimes, submitForm } = props;

    return (
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    )
}


export default BookingPage;