import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
                <div className="navbar-logo">
                    MB
                </div>
            <div className="navbar-links">
                <Link to="/">
                Home
                </Link>
                {/* <Link to="/about">
                About
                </Link> */}
                <Link to="/casestudy">
                Case Studies
                </Link>
                <Link to="/contact">
                Contact
                </Link>
            </div>
        </div>
    )
}




export default Navbar