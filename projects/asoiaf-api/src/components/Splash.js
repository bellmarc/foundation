import React from 'react';
import Music from './Music.js';
import {Link} from 'react-router-dom';
import {withMusic} from '../context/MusicProvider.js';
import video from '../assets/aerial-sunset-intro.mp4';
import {useSpring, animated} from 'react-spring';


const Splash = (props) => {

    const spring = useSpring({opacity: 1, from: {opacity: 0} })
    return (
        <>
        <section className="hero">
            <div className="hero-vid">
            <video autoPlay="autoplay" loop muted="muted" playsInline><source src={video}type="video/mp4"/>Your browser does not support the video.</video>
            </div>
            <div className="hero-overlay">
                <h1 className="hero-title">
                <animated.div style={spring}>You Win or You Die</animated.div>
                </h1>
                <h2 className="hero-subtitle">
                    Winter is Coming
                </h2>
                <Music
                       play={props.play}
                       togglePlay = { props.togglePlay }
                />
                <Link to="/houses/1">
                    <button type="button" className="hero-button">
                    See More &raquo;
                    </button>
                </Link>
            </div>
        </section>
        </>
    )
}




export default withMusic(Splash)