import React, { useState } from 'react';
import '../style/CardEffect.css';

const CardEffect = () => {
    // const [toggle, setToggle] = useState(false);
    const [hoverInfo, isHovered] = useHover();

    const cardInfoToggler = ()=> {
        // setToggle(prevToggle => !prevToggle)
        // onmouseenter add info block and social media
    }

    return (
        <div ref={hoverInfo} >
            {isHovered ? 'true'
             : 'false'}
            <h1>{ cardInfoToggler }</h1>
        </div>
    )
}



export default CardEffect