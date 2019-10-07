import React from "react";
import Navbar from "./Navbar.js";
import { withChar } from "../context/CharacterProvider.js";

const WorldMap = props => {
  return (
    <>
      <div>
        <Navbar history={props.history} pathname={`/map/`} />
      </div>

      <div className="title-container">
        <h2 className="map-title">Explore Westeros/Essos </h2>
      </div>
      <section>
        <div className="westeros-map" alt="westeros" />
      </section>
    </>
  );
};

export default withChar(WorldMap);
