import React from 'react';
import '../style/Slider.css';
import React, { useState } from 'react';

//pick all images & layer them based on z-index
function Slider() {
    const sliderImg1 = require(`../assets/lash-girl-splash.jpg`);
    const sliderImg2 = require(`../assets/lgb-products.png`);

    return (
        <div className="slider-container">
            <img src={sliderImg1} className="splash page" alt="lash girl club splash page"/>
            <img src={sliderImg2} className="products" alt="lash girl club products page"/>
            {/* on image apply onMouseEnter/Leave */}
        </div>
    )
}


export default Slider