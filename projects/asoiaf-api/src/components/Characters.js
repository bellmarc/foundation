import React from 'react';
import video from '../assets/snow-fall.mp4';


const Characters =() => {
    return (
       <>
        <section className="char-hero">
            <div className="char-hero-vid">
               <video autoPlay="autoplay" loop muted="muted" playsInline><source src={video}type="video/mp4"/>Your browser does not support the video.</video>
            </div>
            <div className="char-hero-overlay">
                <h1 className="search-banner"></h1>
                <h1 className="char-hero-title">
                    Find A Character
                </h1>
                <input type="text" className="char-hero-input" placeholder="Search">
                </input>
            </div>
        </section>
        </>
    )
}



export default Characters