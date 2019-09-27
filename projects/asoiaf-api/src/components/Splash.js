import React from 'react';
import {Link} from 'react-router-dom';
import video from '../assets/aerial-sunset-intro.mp4';


function Splash() {
    return (
        <>
        <section className="hero">
            <div className="hero-vid">
               <video autoPlay="autoplay" loop muted="muted" playsInline><source src={video}type="video/mp4"/>Your browser does not support the video.</video>
            </div>
            <div className="hero-overlay">

                <h1 className="hero-title">
                    You win or you die
                </h1>
                <h2 className="hero-subtitle">
                    Winter is Coming
                </h2>
                <Link to="/">
                    <button type="button" className="hero-button">
                    See More &raquo;
                    </button>
                </Link>
            </div>
        {/* Add icon for sound */}
        </section>
        </>
    )
}


export default Splash