import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            LOGO
            <div className="navbar-links">
                <Link to="/">
                Home
                </Link>
                <Link to="/">
                Case Studies
                </Link>
                <Link to="/">
                Contact
                </Link>
            </div>
        </div>
    )
}




export default Navbar