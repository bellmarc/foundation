import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import Home from './components/Home.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={rProps => <Landing {...rProps}/>}/>
          <Route exact path="/home" render={rProps => <Home {...rProps}/>}/>
        </Switch>
      </div>
    )
  }
}





export default App;
