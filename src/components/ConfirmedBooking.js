import { Link } from 'react-router-dom';

const ConfirmedBooking = (props) => {
    const { formData } = props;

    return (
        <div className="comfirm center">
            <div>
                <h1>Thank You!</h1>
                <h1>Your <strong>reservation</strong> at Little Lemon is <span>confirmed</span>.</h1>
                <h3>Please check confirmation details.</h3>
                <div className='confirmed-data'>
                    <p> <b>Booking Date :  <span>{formData.date}</span></b></p>
                    <p> <b>Booking Time :   <span>{formData.times}</span></b></p>
                    <p> <b>No of Guests :   <span>{formData.guests}</span></b></p>
                    <p> <b>Occasion :   <span>{formData.occasion}</span></b></p>
                    <p><b>Your Number  : <span>{formData.phoneNumber}</span></b></p> <br />
                </div>
                <p>Feel free to contact us at (305) 555-1221 for any <b>special requests or modifications</b> to your booking.</p><br />
                <p>We look forward to hosting you!</p><br />

                <Link to="/">
                    <button aria-label="On Click">Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ConfirmedBooking;