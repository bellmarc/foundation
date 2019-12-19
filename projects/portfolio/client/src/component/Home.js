import React from 'react';
import { Link } from 'react-router-dom';
import Content from './Content.js';
import Contact from './Contact.js';
// import ProjectCarousel from './ProjectCarousel.js';
import '../style/Home.css';
// import Portfolio from './Portfolio.js';

const Home = () => {
    return (
        <section className="container">
          <section className="home-hero-banner">
            <h2 className="intro">
              Marc Bell
            </h2>
            <p className="intro-text">I'm a Software Engineer interested in full stack web development, mobile applications, interaction design and foreign languages.
            </p>
            <Link to="/contact"><button className="contact-me-btn">Contact Me</button></Link>
          </section>
          <div className="quote-container">
            <article>
              <p className="text-quote">“If you can design one thing, you can design everything.”</p>
                <p className="text-author">― Massimo Vignelli</p>
            </article>
          </div>

          <div className="project-header-container">
            <h2 className="project-header-text">Projects</h2>
          </div>

          <Content />
          {/* <Portfolio /> */}
          <Contact />
        </section>
    )
}


export default Home