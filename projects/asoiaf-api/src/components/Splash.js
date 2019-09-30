import React from 'react';
import Music from './Music.js';
import {Link} from 'react-router-dom';
import video from '../assets/aerial-sunset-intro.mp4';
import {useSpring, animated} from 'react-spring';


function Splash() {
    const props = useSpring({opacity: 1, from: {opacity: 0} })
    return (
        <>
        <section className="hero">
            <div className="hero-vid">
               <video autoPlay="autoplay" loop muted="muted" playsInline><source src={video}type="video/mp4"/>Your browser does not support the video.</video>
            </div>
            <div className="hero-overlay">
                <h1 className="hero-title">
                <animated.div style={props}>You Win or You Die</animated.div>
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
            <Music />
        </section>
        </>
    )
}


export default Splash