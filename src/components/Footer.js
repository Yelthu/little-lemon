import Logo from '../icons_assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={Logo} alt="" />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><b>Address: </b><br /> 123 Town Street, Chicago</li>
                        <li><b>Phone: </b> <br /> <a href="tel:1234567890">(123) 456-7890</a></li>
                        <li><b>Email:</b><br /> <a href="mailto:reservations@littlelemonrestaurant.com">reservations@littlelemonrestaurant.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )

}

export default Footer;


