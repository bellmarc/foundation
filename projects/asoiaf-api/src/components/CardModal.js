import React, { useState } from "react";
import { withChar } from "../context/CharacterProvider.js";
import { useSpring, animated as a } from "react-spring";

const CardModal = props => {
  console.log(props);

  //     const [flipped, set] = useState(false)
  //     const { transform, opacity } = useSpring({
  //     opacity: flipped ? 1 : 0,
  //     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  //     config: { mass: 5, tension: 500, friction: 80 }
  //   })
  return (
    <>
      <div className="char-card-display" style={{ width: "auto" }}>
        {/* onClick={() => set(state => !state)} */}
        {/* <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} /> */}
        <div className="card-header">
          <img alt="character" className="search-img" src={props.searchResult.image}/>
        </div>
        <div className="card-body">
          <div className="p-card-title">{props.searchResult.age.name}</div>
          <h3> {props.searchResult.house}</h3>
          <div className="p-card-subtitle">
            Actor: {props.searchResult.actor}
          </div>
          <div className="p-card-subtitle">
            Age: {props.searchResult.age.age}
          </div>
          <div className="p-card-subtitle">
            Culture: {props.searchResult.culture}
          </div>
          <div className="p-card-content">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </div>
          </div>
          <div className="p-card-footer">
            <span>
              <button
                className="p-button p-component p-button-text-icon-left"
                style={{ marginRight: "0.25em" }}
              >
                <span className="pi pi-check p-c p-button-icon-left"></span>
                <span className="p-button-text p-c">Save</span>
              </button>
              <button onClick={props.goBackSearch} className="p-button p-component p-button-secondary p-button-text-icon-left">
                <span className="pi pi-times p-c p-button-icon-left"></span>
                <span className="-button-text">Cancel</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withChar(CardModal);
