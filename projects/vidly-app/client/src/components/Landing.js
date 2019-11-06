import React from 'react';
import LazyHero from 'react-lazy-hero';
import '../style/Landing.css';
import { Link } from "react-router-dom";
import HeroImg from "../assets/beach-couple-hero.jpg";

function Landing(props) {
    return (
        <div className="landing-container">
            <LazyHero className="lazy-hero" imageSrc={HeroImg} alt="Married couple at the beach during sunset"><h1>Vidly</h1>
            <Link to={"/registration"}>
                <button className="register-page-link-btn">Get Started</button>
            </Link>
            </LazyHero>
        </div>
    )
}



export default Landing