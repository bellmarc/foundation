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
                <a href="#home">
                Home
                </a>
                <a href="#projects">
                Projects
                </a>
                <a href="#contact">
                Contact
                </a>
            </div>
        </div>
    )
}




export default Navbar