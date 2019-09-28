import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash.js';
import About from './components/About.js';
import Home from './components/Home.js';
import WorldMap from './components/WorldMap.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import { withChar } from "./context/CharacterProvider.js";



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
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/map" component={WorldMap}/>
        </Switch>
        <Footer />
      </div>
      );
  }
}


export default withChar(App);
