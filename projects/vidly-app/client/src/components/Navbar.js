import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';


const Navbar= () => {
    return (
        <div className="navbar">
            <div className="navbar-logo"><Link to="/">Vidly</Link></div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/destination">Destination</Link>
                <Link to="Book A Pro">Book A Pro</Link>
                <Link to="login">Login</Link>
            </div>
        </div>
    )
}



export default Navbar