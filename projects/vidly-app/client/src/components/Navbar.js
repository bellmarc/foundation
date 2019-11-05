import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';


const Navbar= () => {
    return (
        <div className="navbar">
            <div className="navbar-logo"><img src={ require("../assets/vidly-logo.svg")} className="logo"/><Link to="/">Vidly</Link></div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/booking">Book A Pro</Link>
                <Link to="/registration">Login</Link>
            </div>
        </div>
    )
}



export default Navbar