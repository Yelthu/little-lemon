import '../App.css';
import Salad from '../icons_assets/greek salad.jpg';
import LemonDessert from '../icons_assets/lemon dessert.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';


const Specials = () => {
    return (
        <>
            <div className="highlights">
                <div className="highlights-title">
                    <h3>Specials!</h3>
                </div>
                <div className="online">
                    <button className="cta-button">Online Menu</button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={Salad} alt="salad" />
                        <div className="item">
                            <p className="item-name">Greek Salad</p>
                            <p className="price">$12.99</p>
                        </div>
                        <p className="item-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p className="order">Order Delivery...</p>
                    </div>

                    <div className="card">
                        <img src={Bruchetta} alt="bruchetta" />
                        <div className="item">
                            <p className="item-name">Bruchetta</p>
                            <p className="price">$5.99</p>
                        </div>
                        <p className="item-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil from Spain.</p>
                        <p className="order">Order Delivery...</p>
                    </div>

                    <div className="card">
                        <img src={LemonDessert} alt="dessert" />
                        <div className="item">
                            <p className="item-name">Lemon Dessert</p>
                            <p className="price">$5.00</p>
                        </div>
                        <p className="item-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p className="order">Order Delivery...</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Specials;