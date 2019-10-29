import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <Link to="/public">Locations</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}