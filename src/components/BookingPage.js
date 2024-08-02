import { useState } from "react"

const BookingForm = (props) => {

    const { availableTimes, updateTimes } = props;

   // console.log(availableTimes)

    // const [availableTimes, setAvailableTimes] = ([
    //     "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    // ]
    // )

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        updateTimes(selectedDate);
    }

    const [formData, setFormData] = useState({
        resdate: '',
        restime: '17:00',
        guests: '1',
        occasion: 'Birthday'
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('form submitting');
    }

    return (
        <form className="display: grid; max-width: 200px; gap: 20px" onSubmit={handleSubmit}>
            <label htmlFor="resdate">Choose date</label>
            <input type="date" id="resdate" name="resdate" onChange={handleDateChange}></input>
            <label htmlFor="restime">Choose time</label>
            <select id="restime">
                <option value="1">17:00</option>
                <option alue="2">18:00</option>
                <option value="3">19:00</option>
                <option value="4">20:00</option>
                <option value="5">21:00</option>
                <option value="6">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests} onChange={handleChange}></input>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    )
}

const BookingPage = (props) => {

    const { availableTimes, updateTimes } = props;

    return (
        <>
            <h1>Book Now</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </>
    )
}


export default BookingPage;