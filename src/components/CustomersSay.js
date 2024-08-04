import reviews from '../review';


const CustomersSay = () => {
    return (
        <>
            <div className="testomonials-container">
                <div className="testomonials-header">
                    <h2>Testomonials</h2>
                </div>

                <div className="testomonials-cards">
                    {
                        reviews.map((review) => (
                            <div key={review.id} className="testomonials-items">
                                <p>{review.rating}</p>
                                <div className="testomonials-container-img">
                                    <img src={review.image} alt="" />
                                    <p>{review.name}</p>
                                </div>
                                <p>{review.review}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default CustomersSay;