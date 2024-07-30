import '../App.css';
import Restaurant from '../icons_assets/restaurant.jpg';
import Salad from '../icons_assets/greek salad.jpg';
import RestaurantFood from '../icons_assets/restauranfood.jpg';
import LemonDessert from '../icons_assets/lemon dessert.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';
import Owner1 from '../icons_assets/Mario and Adrian A.jpg'
import Owner2 from '../icons_assets/Mario and Adrian b.jpg'

const Main = () => {
    return (
        <>
            <div className="parent">
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


                <div className="about">
                    <div className="about-text-content">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={Owner1} className="image1" alt="owner1" />
                        <img src={Owner2} className="image2" alt="owner2" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main;