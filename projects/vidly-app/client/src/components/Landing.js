import React from 'react';
import '../style/Landing.css';
import { Link } from "react-router-dom";

function Landing(props) {
    return (
        <div className="landing-container">
            LANDING SPLASH
            <Link to={"/registration"}>
                <button className="register-page-link-btn">Get Started</button>
            </Link>
        </div>
    )
}



export default Landing