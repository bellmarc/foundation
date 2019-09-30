import React from 'react';
import axios from 'axios';


const SwornMemberList = (props) => {
    // componentDidMount() {
    // axios.get(props.url)
    // }
    return (
        <div>
            <h1>Sworn Members of House</h1>
                <div>
                { props.location.state.swornmembers.map(swornmember => <h2>{swornmember.url}</h2>)}
                </div>
        </div>
    )
}



export default SwornMemberList
