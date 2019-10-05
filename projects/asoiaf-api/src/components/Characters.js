import React from "react";
import video from "../assets/snow-fall.mp4";
import { withChar } from "../context/CharacterProvider.js";
import Navbar from "./Navbar.js";
import CardModal from "./CardModal";

const Characters = props => {
  // console.log(props)

  return (
    <>
      <Navbar history={props.history} pathname={`/characters/`} />
      <section className="char-hero">
        <div className="char-hero-vid">
          <video autoPlay="autoplay" loop muted="muted" playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
        <div className="char-hero-overlay">
          {props.searchResult === null && <h1 className="char-hero-title">Find A Character</h1>}
          <form onSubmit={props.handleSubmit}>
            <div className="search-con">
              {props.searchResult === null && (
                <>
                  <input
                    type="text"
                    onChange={props.handleChange}
                    value={props.search}
                    name="search"
                    className="char-hero-input"
                    placeholder="Search..."
                  ></input>
                  <button
                    className="pi pi-search"
                    onClick={props.handleSubmit}
                    style={{ fontSize: "1.5em", color: "whitesmoke" }}
                  ></button>
                </>
              )}
            </div>
          </form>
          {props.searchResult && <CardModal />}
        </div>
      </section>
    </>
  );
};

export default withChar(Characters);
