import React from 'react';
import '../style/Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
                <div className="navbar-logo">
                <a href="#home">
                MB
                </a>
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