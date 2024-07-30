import Logo from '../icons_assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="parent">
                <div className="footer-img">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="doormat">
                    <h3>Doormat Navigation</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>menu</p>
                    <p>Reservations</p>
                    <p>Order Online</p>
                    <p>Login</p>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>Address</p>
                    <p>Phone No</p>
                    <p>Email</p>
                </div>
                <div className="social-link">
                    <h3>Social Media Links</h3>
                    <p>Address</p>
                    <p>Phone No</p>
                    <p>Email</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;


