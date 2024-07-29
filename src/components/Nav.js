const NavBar = () => {
    return (
        <>
            <nav>
                <img src="./icon_assets/Logo.svg" alt="logo"></img>
                <ul>
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