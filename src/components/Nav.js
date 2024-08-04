import React, { useState } from "react";
import Logo from '../icons_assets/Logo.svg';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                <a href="/" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav >
        </>
    )
}

export default NavBar;