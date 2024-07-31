import '../App.css';
import CallToAction from './CallToAction'
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BookingPage from './BookingPage';

const Main = () => {
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
                        <Route path="/booking" element={<BookingPage />}></Route>
                    </Routes>
                </div>
            </Router>

        </>
    )
}

export default Main;