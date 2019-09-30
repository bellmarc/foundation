import React from 'react';
import video from '../assets/snow-fall.mp4';
import {withChar} from '../context/CharacterProvider.js';


const Characters =(props) => {
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
                {/* add button */}
                <button className="pi pi-search" style={{'fontSize': '2em', 'color':'whitesmoke'}}>{props.searchCharacter}</button>
            </div>
        </section>
        </>
    )
}



export default withChar(Characters);