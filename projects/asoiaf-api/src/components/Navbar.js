import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import {withChar} from '../context/CharacterProvider.js';


const Navbar = (props) => {
    // console.log("Navbar", props.history.location)
    // console.log(`/houses/${props.pageNum}`)
    console.log(props)

//     let currentTab
//     if (props.history.location.pathname === `/houses/`){
//         currentTab = "currentTab"
//    } else {
//         currentTab = "nav-highlight"
//    }


    return (
        <nav className="currentTab">
           <Link className={props.pathname==='/houses/' &&"nav-highlight"} to ="/houses/">Houses</Link>
           <Link className={props.pathname==='/members' &&"nav-highlight"} to="/members"> Sworn Members</Link>
           <Link className={props.pathname==='/characters/' &&"nav-highlight"} to="/characters">Characters</Link>
           {/* <Link to="/map">Map</Link> */}
        </nav>
    )
}





export default withChar(Navbar)