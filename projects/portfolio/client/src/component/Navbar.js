import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
                <div className="navbar-logo">
                <Link to="/">
                MB
                </Link>
                </div>
            <div className="navbar-links">
                <Link to="/">
                Home
                </Link>
                {/* <Link to="/about">
                About
                </Link> */}
                <Link to="/projects">
                Projects
                </Link>
                <Link to="/contact">
                Contact
                </Link>
            </div>
        </div>
    )
}




export default Navbar