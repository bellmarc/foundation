import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
           <Link to ="/houses/1">Houses</Link>
           <Link to="members"> Sworn Members</Link>
           <Link to="/characters">Characters</Link>
           {/* <Link to="/map">Map</Link> */}
        </nav>
    )
}



export default Navbar