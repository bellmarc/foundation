import React from 'react';
import Navbar from './Components/Navbar.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import {withTheme} from './Context/ThemeProvider.js';


const App = (props) =>  {
console.log(props)
    return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
        <button onClick={props.toggleTheme}>Toggle Theme </button>
    </div>
  )
}



export default withTheme(App)
