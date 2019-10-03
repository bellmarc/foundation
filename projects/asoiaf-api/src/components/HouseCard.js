import React from 'react';
import {Link} from 'react-router-dom';
import {withChar} from '../context/CharacterProvider.js';
import { useSpring, animated } from 'react-spring'


// animation on card
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const HouseCard = (props) => {
    const [move, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    // console.log(props.houses.swornMembers)
    return (
        <>
        <div>
        <div className="house-container">
            {/* Links to member Route & Pass Props: */}
            <Link to={{
                    pathname: "/members",
                    state: {swornMembers: props.swornMembers}
            }}>
                <animated.div className="card" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{'display': 'block', transform: move.xys.interpolate(trans) }}
                >
                    <h2 className="house-name">{props.name}
                    </h2>
                    <h3 className="house-name">{props.region}</h3>
                </animated.div>
            </Link>

        </div>
            {/* <img alt={house} style={imgStyle} src={imgURL}/> */}
        </div>
        </>
    )
}




export default withChar(HouseCard)