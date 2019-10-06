import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style/App.css";
import "./style/navbar.css";
import "./style/splash.css";
import "./style/member.css";
import "./style/house-card.css";
import "./style/characters.css";
import "./style/map.css";
import "./style/footer.css";
import App from "./App";
import CharacterProvider from "./context/CharacterProvider";
import MusicProvider from "./context/MusicProvider";

ReactDOM.render(
  <BrowserRouter>
    <CharacterProvider>
      <MusicProvider>
        <App />
      </MusicProvider>
    </CharacterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
