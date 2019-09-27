import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import {withTheme} from './Context/ThemeProvider.js';


const App = (props) =>  {
console.log(props)
    return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home}>Home</Route>
        <Route exact path="/main" component={Main}>Main</Route>
      </Switch>
      <Main />
      <Footer />
        <button onClick={props.toggleTheme}>Toggle Theme </button>
    </div>
  )
}



export default withTheme(App)
