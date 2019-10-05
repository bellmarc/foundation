import React from 'react';
import Navbar from './Navbar.js';
import {withChar} from '../context/CharacterProvider.js';


const WorldMap = (props) => {
    return (
        <div>
        <Navbar
            history={props.history}
            pathname={`/map/`}
       />
        </div>
    )
}



export default withChar(WorldMap)