import React from 'react';
import SwornMember from './SwornMember.js';
import {withChar} from '../context/CharacterProvider.js';


const SwornMemberList = (props) => {
    let mappedMembers
    if (props.location) {
        // console.log(props.location.state.swornMembers)
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
            {/* <h1>Sworn Members of {props.houses.name}</h1> */}
            {mappedMembers}
        </div>
    )
}



export default withChar(SwornMemberList)
