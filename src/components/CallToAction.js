import '../App.css';
import Restaurant from '../icons_assets/restaurant.jpg';

const CallToAction = () => {
    return (
        <>
            <div className="hero">
                <div className="text-content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="cta-button">Reserve a Table</button>
                </div>
                <div className="image-content">
                    <img src={Restaurant} alt="Descriptive Alt Text" />
                </div>
            </div>
        </>
    )
}

export default CallToAction;