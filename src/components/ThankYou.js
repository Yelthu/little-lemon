import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
            <div>
                <h1>Thank You!</h1>
                <h1>Your <strong>reservation</strong> at Little Lemon is <span>confirmed</span>.</h1>
                <h3>Please check your email for confirmation details.</h3>

                <p>Feel free to contact us at (305) 555-1221 for any special requests or modifications to your booking.</p><br />
                <p>We look forward to hosting you!</p><br />

                <p>Can wait to see and treat with our best meals</p> <br />
                <Link to="/">
                    <button aria-label="On Click">Back to Home</button>
                </Link>
            </div>
    )
}

export default ThankYou;