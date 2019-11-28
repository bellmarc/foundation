import React from 'react';
import { Link } from 'react-router-dom';
// import Content from './Content.js';
import '../style/Home.css';
import profilePhoto from '../assets/profilePic.jpg';
import Portfolio from './Portfolio.js';
// import hero from '../assets/welcome-banner.jpg';

const Home = () => {
    return (
        <section className="container">
          <section className="home-hero-banner">
            {/* <img src={hero} className="hero-home" alt="computer screen with react code as a hero banner"
            /> */}
            <h2 className="intro">
              Marc Bell
            </h2>
            <p className="intro-text">I'm a Software Engineer interested in full stack web development, mobile applications, interaction design and foreign languages.
            </p>
            <Link to="/contact"><button className="contact-me-btn">Contact Me</button></Link>
          </section>
          <div className="left-half">
            <article>
              <h1 className="left-header">Welcome</h1>
              <p className="left-text">Happiness is not something you postpone for the future; it is something you design for the present.</p>
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
        </section>
    )
}


export default Home