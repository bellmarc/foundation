import React from 'react';
import video from '../assets/snow-fall.mp4';
import {withChar} from '../context/CharacterProvider.js';
import Navbar from './Navbar.js';



const Characters =(props) => {
console.log(props)
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
               <form onSubmit={props.handleSubmit}>
                <div className="search-con">
                <input type="text" onChange={props.handleChange} value={props.search} name="search" className="char-hero-input" placeholder="Search...">
                </input>
                {/* add button */}
                <button className="pi pi-search" onClick={props.handleSubmit} style={{'fontSize': '1.5em', 'color':'whitesmoke'}}>
                </button>
                </div>
                <div className="char-display" style={{'background': 'whitesmoke', 'border': '1px solid white', height: '250px', width: '1000px' }}>
                    <h1 className="char-name" style={{'padding': '20px'}}>
                        Results:  {props.searchResult.age && props.searchResult.age.name}
                    </h1>
                    <h2 className="char-age" style={{'padding': '20px'}}>
                        Age:{props.searchResult.age && props.searchResult.age.age}
                    </h2>
                    <img alt="character" className="search-img" src={props.searchResult.image}/>
                    <h3 className="char-name" style={{'padding': '20px'}}>

                    </h3>
                </div>
                </form>
            </div>
        </section>
        </>
    )
}



export default withChar(Characters);