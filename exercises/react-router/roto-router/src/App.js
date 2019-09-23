import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>Home</Route>
        <Route path="/about" component={About}>About</Route>
        <Route path="/services" component={Services}>Services</Route>
      </Switch>
    </div>
  );
}


export default App;
