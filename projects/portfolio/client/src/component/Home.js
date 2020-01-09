import React from 'react';
// import { Link } from 'react-router-dom';
import Content from './Content.js';
// import DesignWork from './DesignWork.js';
// import PortfolioList from '../component/PortfolioList.js';
import Footer from './Footer.js';
import '../style/Home.css';


const Home = () => {
    return (
        <section id="home" className="container">
          <section className="home-hero-banner">
            <h2 className="intro">
              Marc Bell
            </h2>
            <p className="intro-text">I'm a Software Engineer interested in full stack web development, mobile applications, interaction design and foreign languages.
            </p>
              <a href="#contact">
                <button  className="contact-me-btn">Contact Me</button>
              </a>
          </section>
          <div className="quote-container">
            <article>
              <p className="text-quote">“If you can design one thing, you can design everything.”</p>
                <p className="text-author">― Massimo Vignelli</p>
            </article>
          </div>
          <div className="header-container">
            <h2 className="project-header-text">Projects</h2>
          </div>
            {/* <PortfolioList /> */}
          <Content />
          {/* <div className="header-container">
            <h2 className="project-header-text">UX/UI Design Projects </h2>
          </div> */}
            {/* <DesignWork /> */}
          <Footer />
        </section>
    )
}


export default Home