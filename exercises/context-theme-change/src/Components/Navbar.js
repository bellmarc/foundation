import React from 'react';
import { withTheme } from '../Context/ThemeProvider';

const Navbar = (props) => {
  return(
    <div className={`nav-${props.theme}`}>
        {/* <div className="link">Home</div>
        <div className="link">About</div>
        <div className="link">Contact</div> */}
        <Link to= "/">Home</Link>
        <Link to="/main">Main</Link>
    </div>
  )
}



export default withTheme(Navbar)