import React from 'react';
import { withTheme } from '../Context/ThemeProvider';

const Navbar = (props) => {
  return(
    <nav className={`nav-${props.theme}`}>
        <div className="link">Home</div>
        <div className="link">About</div>
        <div className="link">Contact</div>
    </nav>
  )
}



export default withTheme(Navbar)