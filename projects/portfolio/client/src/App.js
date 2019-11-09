import React from 'react';
// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import Home from './component/Home.js';
import CaseStudy from './component/CaseStudy.js';
import Resume from './component/Resume.js';
import Contact from './component/Contact.js';


function App() {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/casestudy/" component={ CaseStudy }/>
          <Route path="/resume/" component={ Resume } />
          <Route path="/contact/" component={ Contact }/>
        </Switch>
    </div>
  );
}

export default App;
