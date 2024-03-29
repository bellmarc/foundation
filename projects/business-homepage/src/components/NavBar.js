import React from "react";
import "../css/nav-bar.css";
import icon from '../img/icon.png';

function NavBar() {
    return (
        <div className="nav-container">
            <img className="icon" src={icon} alt="venn diagram business logo"/>
            <div>
               <p className="company-name">Bell & Bowen</p>
               <p className="subtext">Software Development & Design Firm </p>
            </div>

            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
        </div>
    )
  }

  export default NavBar;