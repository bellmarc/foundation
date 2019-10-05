import React from "react";
import { Link } from "react-router-dom";
import { withChar } from "../context/CharacterProvider.js";

const Navbar = props => {
  // console.log("Navbar", props.history.location)

  return (
    <nav className="currentTab">
      <Link
        className={props.pathname === "/houses/" && "nav-highlight"}
        to="/houses/"
      >
        Houses
      </Link>
      {/* <Link className={props.pathname==='/members' &&"nav-highlight"} to="/members"> Sworn Members</Link> */}
      <Link
        className={props.pathname === "/characters/" && "nav-highlight"}
        to="/characters"
      >
        Characters
      </Link>
      <Link
        className={props.pathname === "/map/" && "nav-highlight"}
        to="/map/"
      >
        Map
      </Link>
    </nav>
  );
};

export default withChar(Navbar);
