import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash.js';
import About from './components/About.js';
import Home from './components/Home.js';
import WorldMap from './components/WorldMap.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      characters: []
    }
  }
  componentDidMount(){
    axios.get("https://www.anapioficeandfire.com/api/characters")
    .then(res => console.log(res))
    .catch(err => (err))
  }


  render(){
     return (
      <div className="App">
        <div>
          <Navbar />
          <Splash />
        </div>
        <Switch>
            <Route exact path="/" component={Home}>Home</Route>
            <Route path="/about" component={About}>About</Route>
            <Route path="/map" component={WorldMap}>WorldMap</Route>
        </Switch>
        <Footer />
      </div>
      );
  }
}


export default App;
