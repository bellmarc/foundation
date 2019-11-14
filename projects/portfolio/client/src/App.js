import React from 'react';
// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import Home from './component/Home.js';
import CaseStudy from './component/CaseStudy.js';
import Resume from './component/Resume.js';
import Contact from './component/Contact.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'


function App() {

  library.add(fas, fab, faEnvelope, faFile, faLinkedinIn, faGithubAlt);

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
