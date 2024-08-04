import Header from './Header';
import ConfirmedBooking from './ConfirmedBooking'
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import { useEffect, useReducer, useState } from 'react';

// Random Date Generation
const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
}

const fetchAPI = (date) => {
    const times = [];
    const randomDate = seededRandom(date.getDate());

    // Combine with time segmenet (AM/PM)
    for (let i = 12; i <= 24; i++) {
        const hour = i % 12 || 12;
        const period = i < 12 || i >= 24 ? 'AM' : 'PM';

        if (randomDate() < 0.5) {
            times.push(`${hour.toString().padStart(2, '0')}:00 ${period}`);
        }
        if (randomDate() < 0.5) {
            times.push(`${hour.toString().padStart(2, '0')}:30 ${period}`);
        }
    }

    return times;

}

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATE':
            return { availableTimes: fetchAPI(new Date(action.date)) };
        default:
            return state;
    }
};


const Main = () => {

    const [bookingData, setBookingData] = useState({});
    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();

    const submitAPI = (formData) => {
        console.log("Form submitted:", formData);
        setBookingData(formData)
        return true;
    }

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed", { state: formData });
        }
    };

    useEffect(() => {
        dispatch({ type: 'UPDATE_DATE', date: new Date() });
    }, []);


    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking"
                    element={<BookingPage
                        availableTimes={state.availableTimes}
                        submitForm={submitForm}
                    />}
                />
                <Route path="/confirmed" element={<ConfirmedBooking formData={bookingData} />} />
            </Routes>
        </main>
    )
}

export default Main;