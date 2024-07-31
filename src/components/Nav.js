import '../App.css';
import Logo from '../icons_assets/Logo.svg';

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <ul className="menu">
                    <img src={Logo} alt="logo" className="logo" />
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav >
        </>
    )
}

export default NavBar;