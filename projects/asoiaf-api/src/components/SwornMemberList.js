import React from 'react';
import SwornMember from './SwornMember.js';
import {withChar} from '../context/CharacterProvider.js';

const SwornMemberList = (props) => {
    // const mappedMembers = props.swornMembers.map((member, index) => {
    //     return <SwornMember
    //                 key={member.url + index}
    //                 url={member}
    //             />
    //     })
    // console.log(mappedMembers)
    // console.log(props.location.state)
    return (
        <div>
            <h1>Sworn Members of {`Sworn Members List:  ${props.name}`}
            </h1>
            {/* {mappedMembers} */}
        </div>
    )
}



export default withChar(SwornMemberList)
