import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className= "navbar-title">Navbar</div>
            <div className="navbar-routes">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/checkout'>Check Out</Link>
                <Link to='/search'>Search</Link>
            </div>
        </div>
     );
}

export default Navbar;