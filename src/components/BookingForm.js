import { useState } from "react";

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const BookingForm = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({ occasion, guests, date, times, phoneNumber });
    };

    // Handle date change
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // Handle phone number formatting
    const handlePhoneNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) value = value.slice(0, 10);
        const formattedValue = value
            .replace(/(\d{3})(\d{0,3})/, '($1) $2')
            .replace(/(\d{3})(\d{0,4})/, '$1-$2');
        setPhoneNumber(formattedValue);
    };

    const getIsFormValid = () => {
        return (
            name.length > 0 &&
            email.length > 0 && validateEmail(email) &&
            phoneNumber.length > 0
        )
    }

    return (
        <header>
            <section className="container">
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div className="booking-form">
                            <h4>Please fill out the form below to make your reservation. All Fields are required.</h4>
                            <div className="form-group">
                                <label htmlFor="fullName">Name:</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="booking-form">
                                <label htmlFor="phone-number">Phone Number:</label>
                                <input
                                    id="phone-number"
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    placeholder="(123) 456-7890"
                                />
                            </div>
                            <div className="booking-form">
                                <label htmlFor="book-date">Select a Date:</label>
                                <input
                                    id="book-date"
                                    value={date}
                                    onChange={handleDateChange}
                                    type="date"
                                    required
                                />
                            </div>
                            <div className="booking-form">
                                <label htmlFor="book-time">Select Time:</label>
                                <select
                                    id="book-time"
                                    value={times}
                                    onChange={(e) => setTimes(e.target.value)}
                                    required
                                >
                                    <option value="">Select a Time</option>
                                    {
                                        props.availableTimes?.map((availableTime) => (
                                            <option key={availableTime} value={availableTime}>
                                                {availableTime}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="booking-form">
                                <label htmlFor="book-guests">Number of Guests:</label>
                                <input
                                    id="book-guests"
                                    min="1"
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    type="number"
                                    placeholder="0"
                                    max="10"
                                    required
                                />
                            </div>
                            <div className="booking-form">
                                <label htmlFor="book-occasion">Occasion:</label>
                                <select
                                    id="book-occasion"
                                    value={occasion}
                                    onChange={(e) => setOccasion(e.target.value)}
                                    required
                                >
                                    <option value="">Select an Option</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </div>
                            <br /><br />
                            <div>
                                <button className="btnReceive" aria-label="On Click" type="submit" value="Confirm Your Reservation" disabled={!getIsFormValid}>Confirm Your Reservation</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;