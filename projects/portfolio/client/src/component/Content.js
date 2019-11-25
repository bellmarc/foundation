import React from 'react';
import '../style/Content.css';
import sample from '../assets/vidly-peek.png';
import sampleTwo from '../assets/lgc-social.png';

const Content = () => {
    return (
        <section className="content-container">
            <div className="portfolio-sample-img">
                <img src={ sample } className="sample-one" alt="sample of my website work"/>
            </div>
            <div className="content-text-one">
                <h3>
                    View my Case Studies
                </h3>
                <p>
                    I enjoy creativity that comes with Front-End development.
                </p>
            </div>
            <div className="portfolio-sample-img">
                <img src={ sampleTwo } className="sample-two" alt="sample of my website work"/>
            </div>
            <div className="content-text-two">
                <h3>
                    View More Case Studies
                </h3>
                <p>
                    I enjoy creativity that comes with Front-End development.
                </p>
            </div>
        </section>
    )
}

export default Content

