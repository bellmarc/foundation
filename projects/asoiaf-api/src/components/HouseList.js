import React from 'react';
import {withChar} from '../context/CharacterProvider.js';
import HouseCard from './HouseCard.js';
import SwornMemberList from './SwornMemberList.js';

const HouseList = (props) => {
//     console.log(props)

    const mappedCards = props.houses.map(house => {

          return (
          <>
               <HouseCard
                         name={house.name}
                         region={house.region}
                         swornMembers={house.swornMembers}
               />
               <SwornMemberList
                    name={house.name}
               />
          </>
          )
     })

     return (
        <div className="house-container">
       {/* can rcv mappedProps */}
       <h1 className="house-banner">All Houses </h1>
       <div>
               {mappedCards}
       </div>
       {/* FCN to only show PrevPg button on 2nd Pg */}
       <div>
            <button className="prev-page" onClick={ props.getPrevHousePage}>
                 &laquo; Previous page</button>
       </div>
       <div>
            <button className="next-page" onClick={ props.getNextHousePage} >Next page &raquo; </button>
       </div>

        </div>
    )
}

export default withChar(HouseList)
