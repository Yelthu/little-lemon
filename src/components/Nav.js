import '../App.css';
import Logo from '../icons_assets/Logo.svg';

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <img src={Logo} alt="logo" className="logo" />
                <ul className="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;