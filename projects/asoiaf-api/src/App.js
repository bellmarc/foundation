import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash.js';
import Characters from './components/Characters.js';
import Home from './components/HouseList.js';
import SwornMember from './components/SwornMember.js';
import WorldMap from './components/WorldMap.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import { withChar } from "./context/CharacterProvider.js";
import HouseList from './components/HouseList.js';



class App extends React.Component {
  componentDidMount() {
    this.props.getHouses()
  }

  render(){
    console.log(this.props)
     return (
      <div className="App">
        <div>
          <Navbar />
          {/* <Splash /> */}

        </div>
        <Switch>
            <Route exact path="/" component={HouseList}/>
            <Route path="/characters" component={Characters}/>
            <Route path="/swornmember" component={SwornMember}/>
            <Route path="/map" component={WorldMap}/>
        </Switch>
        <Footer />
      </div>
      );
  }
}


export default withChar(App);
