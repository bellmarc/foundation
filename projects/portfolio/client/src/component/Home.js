import React from 'react';
import { Link } from 'react-router-dom';
// import Content from './Content.js';
import '../style/Home.css';
import ParallaxDivider from '../component/ParallaxDivider.js';
import Portfolio from './Portfolio.js';
import profilePhoto from '../assets/author-profile.jpg';

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
          <div className="left-half">
            <article>
              <p className="left-text-quote">“If you can design one thing, you can design everything.”</p>
                <p className="left-text-author">― Massimo Vignelli</p>
            </article>
          </div>
          <div className="right-half">
            <article>
              <h1 className="right-header">Meet Marc</h1>
              <div className="image-cropper">
                <img className="profile-photo" src={profilePhoto} alt="marc circular profile shot"
                />
              </div>
              <p className="right-text">Developer and Military Veteran with an interest in innovation and latest technologies. </p>
            </article>
          </div>
          {/* <Content /> */}
          <Portfolio />
          <ParallaxDivider />
        </section>
    )
}


export default Home