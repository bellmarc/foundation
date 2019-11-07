import React from 'react';
import '../style/About.css';
// import aboutVideo from "../assets/couple-hot-air-balloon-video.mp4";
import AboutImg from '../assets/beach-couple-daylight-lift.jpg';


const About = () => {
    // toggleVid = () => {
    // }
    return (
        <div className="about-container">
            {/* Video here */}
            {/* <div className="about-vid-banner">
                <video autoPlay="autoplay" loop muted="muted" playsInline>
                    <source src={aboutVideo} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            </div>
            <div className="about-vid-overlay">
                <h1 className="about-title">Capturing your Special Moments for a Lifetime</h1>
            </div> */}
            <img src={AboutImg} className="about-banner" alt="family"></img>

            <div className="about-content">
                <div className="about-header">About Us</div>
                    <p className="about-text">Vidly strives to create special moments by connecting customers to professional videographers. You can have a stress-free vacation by booking a local videographer in your next travel plan.
                    </p>
            </div>
            <div className="about-content-two">
                <div className="about-header-two">Founders</div>
                    <p className="about-text-two">Vidly strives to create special moments by connecting customers to professional videographers. You can have a stress-free vacation by booking a local videographer in your next travel plan.
                    </p>
            </div>

        </div>
    )
}



export default About