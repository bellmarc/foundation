import React from "react";
import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash.js";
import Characters from "./components/Characters.js";
// import Music from './components/Music';
import SwornMemberList from "./components/SwornMemberList.js";
import WorldMap from "./components/WorldMap.js";
import Footer from "./components/Footer.js";
// import Navbar from './components/Navbar.js';
import { withChar } from "./context/CharacterProvider.js";
import HouseList from "./components/HouseList.js";

class App extends React.Component {
  componentDidMount() {
    this.props.getHouses(1);
  }

  render() {
    return (
      <div className="App">
        {/* <div>
          <Navbar />
      </div> */}
        <Switch>
          <Route path="/houses/:_id" component={HouseList} />
          <Route path="/houses" component={HouseList} />
          <Route path="/characters" component={Characters} />
          <Route path="/members" component={SwornMemberList} />
          <Route path="/map" component={WorldMap} />
          <Route path="/" component={Splash} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withChar(App);
