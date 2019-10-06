import React from "react";
import { withChar } from "../context/CharacterProvider.js";


const CardModal = props => {
  console.log(props);

  return (
    <>
      <div className="char-card-display" style={{ width: "auto" }}>

        <div className="card-header">
          <img alt="character" className="search-img" src={props.searchResult.image}/>
        </div>
        <div className="card-body">
          <div className="card-title">{props.searchResult.age.name}</div>
          <h3> {props.searchResult.house}</h3>
          <div className="card-subtitle">
            Actor: {props.searchResult.actor}
          </div>
          <div className="card-subtitle">
            Age: {props.searchResult.age.age}
          </div>
          <div className="card-subtitle">
            Culture: {props.searchResult.culture}
          </div>
          <div className="card-content">
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </div>
          </div>
          <div className="card-footer">
            <span>
              <button
                className="p-button p-component p-button-text-icon-left"
                style={{ marginRight: "0.25em", width: '100px' }}
              >
                <span className="pi pi-check p-c p-button-icon-left"></span>
                <span className="p-button-text save-btn p-c">Save</span>
              </button>
              <button onClick={props.goBackSearch} className="p-button p-component p-button-secondary p-button-text-icon-left">
                <span className="pi pi-times p-c p-button-icon-left"></span>
                <span className="p-button-text canx-button">Cancel</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withChar(CardModal);
