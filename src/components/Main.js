import '../App.css';
import CallToAction from './CallToAction'
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

export const initializeTimes = () => {
    return  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

export const reducer = (state, action) => {
    console.log('arrive from booking page ....', action)
    switch (action.type) {
        case 'UPDATE_TIMES':
            return {
               ...state,
               selectedDate: action.payload
            }
        default:
            return state;
    }

}

const Main = () => {

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

    return (
        <>
            <Router>
                <div className="parent">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/hero" element={<CallToAction />} />
                        <Route path="/specials" element={<Specials />} />
                        <Route path="/testimonials" element={<CustomersSay />} />
                        <Route path="/about" element={<Chicago />} />
                        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />}></Route>
                    </Routes>
                </div>
            </Router>

        </>
    )
}

export default Main;