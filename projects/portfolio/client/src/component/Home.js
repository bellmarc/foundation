import React from 'react';
import '../style/Home.css';
import profilePhoto from '../assets/profilePic.jpg';
import banner from '../assets/welcome-banner.jpg';

const Home = () => {
    return (
        <section className="container">
          <div className="home-img-banner">
            <img src={banner} className="img-home" alt="computer screen with react code as a banner"
            />
          </div>
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
        </section>
    )
}


export default Home