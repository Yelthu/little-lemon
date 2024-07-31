import '../App.css';
import Owner1 from '../icons_assets/Mario and Adrian A.jpg'
import Owner2 from '../icons_assets/Mario and Adrian b.jpg'

const Chicago = () => {
    return (
        <>
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
        </>
    )
}

export default Chicago;