import React from 'react';
import video from '../assets/snow-fall.mp4';
import {withChar} from '../context/CharacterProvider.js';
import Navbar from './Navbar.js';



const Characters =(props) => {
    return (
       <>
       <Navbar
                    history={props.history}
                    pathname={`/characters/`}
       />
        <section className="char-hero">
            <div className="char-hero-vid">
               <video autoPlay="autoplay" loop muted="muted" playsInline><source src={video}type="video/mp4"/>Your browser does not support the video.</video>
            </div>
            <div className="char-hero-overlay">
                <h1 className="search-banner"> </h1>
                <h1 className="char-hero-title">
                    Find A Character
                </h1>
               <div className="search-con"> <input type="text" className="char-hero-input" placeholder="Search">
                </input>
                {/* add button */}
                <button className="pi pi-search" style={{'fontSize': '1.5em', 'color':'whitesmoke'}}>{props.searchCharacter}</button>
             </div>

            </div>
        </section>
        </>
    )
}



export default withChar(Characters);