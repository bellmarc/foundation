import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
           <Link to ="/">Houses</Link>
           <Link to="swornmembers"> Sworn Members</Link>
           <Link to="/characters">Characters</Link>
           {/* <Link to="/map">Map</Link> */}
        </nav>
    )
}



export default Navbar