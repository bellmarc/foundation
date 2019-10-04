import React from 'react';
import SwornMember from './SwornMember.js';
import {withChar} from '../context/CharacterProvider.js';


const SwornMemberList = (props) => {
    let mappedMembers
    if (props.location) {
        //Urls display:  console.log(props.location.state.swornMembers)
        mappedMembers =  props.location.state.swornMembers.map((member, index) => {
            // console.log(member.url)
        return <SwornMember

                key={member + index}
                url={member}
                />
    })
    }

    return (
        <div>
            <h1>Sworn Members </h1>
            {mappedMembers.length ? mappedMembers : "No Sworn Members associated with this House"}
            <div>
       </div>
            <button className="return-btn" onClick={props.history.goBack}>
                &laquo; Previous    page

            </button>
       </div>
    )
}



export default withChar(SwornMemberList)
