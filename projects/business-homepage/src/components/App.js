import React from 'react';
import  '../css/App.css';
import '../css/main.css';
import '../css/hero.css';
import '../css/services.css';
import '../css/contact.css';
import '../css/my-form.css';
import '../css/footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import Nav from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import { faPencilRuler, faDatabase, faDesktop, faSearch, faTools, faReceipt } from '@fortawesome/free-solid-svg-icons';

library.add(faPencilRuler, faDatabase, faDesktop, faSearch, faTools, faReceipt);

function App() {
  return (
    <div className="app-container">
         <Nav />
         <Hero />
         <Main />
         <Services/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
