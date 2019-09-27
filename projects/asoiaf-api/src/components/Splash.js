import React from 'react';
import video from '../assets/aerial-sunset-intro.mp4';


function Splash() {
    return (
        <section className="hero">
            <video autoPlay="autoplay" loop muted="muted" playsInline><source src={video}type="video/mp4"/>Your browser does not support the video.</video>
            <div className="hero-content">
            <h1 className="hero-title">
                You win or you die
            </h1>
            <h2 className="hero-subtitle">
                  Winter is Coming
            </h2>
            <button type="button" className="hero-button" onClick="#">
            See More &raquo;
        </button>
        {/* Add icon for sound */}
            </div>
        </section>
    )
}


export default Splash