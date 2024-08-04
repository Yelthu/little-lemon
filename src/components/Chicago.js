import '../App.css';
import Owner1 from '../icons_assets/Mario and Adrian A.jpg'
import Owner2 from '../icons_assets/Mario and Adrian b.jpg'

const Chicago = () => {
    return (
        <>
            <div className="about">
                <section>
                    <div className='chicago'>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>
                            We are a family owned Mediterraneran restaurant, focused on
                            traditional recipes servred with a modern twist.
                        </p>
                    </div>
                    <div className="about-image-container">
                        <img src={Owner1} className="image1" alt="owner1" />
                        <img src={Owner2} className="image2" alt="owner2" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Chicago;