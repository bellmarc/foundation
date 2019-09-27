import React from 'react';
import Splash from './components/Splash.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Splash />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
