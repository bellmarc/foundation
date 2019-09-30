import React from 'react';
import {Link} from 'react-router-dom';
import {withChar} from '../context/CharacterProvider.js';

//rcvs props from HouseList
const HouseCard = (props) => {
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
                <span className="card" style={{'display': 'block'}}>
                     <h2 className="house-name">{props.name}

                    </h2>
                    <h3 className="house-name">{props.region}</h3>
                </span>
                </Link>

        </div>
            {/* <img alt={house} style={imgStyle} src={imgURL}/> */}
        </div>
        </>
    )
}




export default withChar(HouseCard)