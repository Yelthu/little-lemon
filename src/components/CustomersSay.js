import '../App.css';
import Salad from '../icons_assets/greek salad.jpg';
import RestaurantFood from '../icons_assets/restauranfood.jpg';
import LemonDessert from '../icons_assets/lemon dessert.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';


const CustomersSay = () => {
    return (
        <>
            <div className="testomonials">
                <h3>Testomonials</h3>
                <div className="cards">

                    <div className="testomonials-card">
                        <p className="rating">Rating ⭐⭐⭐⭐</p>
                        <div className="review-panel">
                            <img className="review-img" src={Salad} alt="salad" />
                            <p className="reviewer">Greek Salad</p>
                        </div>
                        <p className="review">Review</p>
                    </div>

                    <div className="testomonials-card">
                        <p className="rating">Rating ⭐⭐⭐⭐</p>
                        <div className="review-panel">
                            <img className="review-img" src={RestaurantFood} alt="restaurantfood" />
                            <p className="reviewer">Fish Cake</p>
                        </div>
                        <p className="review">Review</p>
                    </div>

                    <div className="testomonials-card">
                        <p className="rating">Rating ⭐⭐⭐⭐⭐</p>
                        <div className="review-panel">
                            <img className="review-img" src={Bruchetta} alt="bruchetta" />
                            <p className="reviewer">Bruchetta</p>
                        </div>
                        <p className="review">Review</p>
                    </div>

                    <div className="testomonials-card">
                        <p className="rating">Rating  ⭐⭐⭐⭐⭐</p>
                        <div className="review-panel">
                            <img className="review-img" src={LemonDessert} alt="dessert" />
                            <p className="reviewer">Dessert</p>
                        </div>
                        <p className="review">Review</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomersSay;