import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Elementum</div>

            <ul className="navbar-links">
                <li>Home</li>
                <li>Studio</li>
                <li>Services</li>
                <li>Contact</li>
                <li>FAQs</li>
            </ul>

            <div className="navbar-menu">
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
