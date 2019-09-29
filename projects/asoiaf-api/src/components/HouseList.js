import React from 'react';
import {withChar} from '../context/CharacterProvider.js';


const HouseList = (props) => {
    console.log(props)
    return (
        <div className="house-container">
       {/* can rcv mappedProps */}
       <h1 className="house-banner">All Houses </h1>
       <div>
            { props.houses.map(house => <h2>{house.name}</h2>)}
       </div>
       {/* FCN to only show PrevPg button on 2nd Pg */}
       <div>
            <button className="prev-page" onClick={ props.getPrevHousePage}>Previous Page</button>
       </div>
       <div>
            <button className="next-page" onClick={ props.getNextHousePage} >Next page</button>
       </div>

        </div>
    )
}

export default withChar(HouseList)
