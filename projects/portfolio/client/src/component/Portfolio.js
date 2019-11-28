import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Normalize.css';
import '../style/Portfolio.css';
import lgcsample from '../assets/lgc-social.png';
import moxiesample from '../assets/moxie-bio.png';


const Portfolio = () => {
    return (
        <section className="portfolio-card-container">
        <div className="grid">
					<figure className="effect-zoe item-one-card">
						<img src={ lgcsample } className="sample-item-one" alt="lgcsample"/>
						<figcaption>
							<h2>Lash Girl <span>Club Inc.</span></h2>
							<p className="icon-links">
								<Link to="/"><span className="icon-heart"></span></Link>
								<Link to="/"><span className="icon-eye"></span></Link>
								<Link to="/"><span className="icon-paper-clip"></span></Link>
							</p>
							<p className="description">A hybrid e-commerce and social media platform seeking to promote brand products through cosmetic social media influencers.</p>
						</figcaption>
					</figure>
                    {/* srcSet={ moxiesample + '2x'} */}
					<figure className="effect-zoe item-two-card">
						<img src={ moxiesample }  className="sample-item-two" alt="moxiesample"/>
						<figcaption>
							<h2>Moxie <span>App</span></h2>
							<p className="icon-links">
								<Link to="/"><span className="icon-heart"></span></Link>
								<Link to="/"><span className="icon-eye"></span></Link>
								<Link to="/"><span className="icon-paper-clip"></span></Link>
							</p>
							<p className="description">As an AT&T Hackathon Entry, Moxie seeks a new way to discover content in a social platform where users can share/teach skills through videos to other users. It's main focus is on being a learning platform rather than entertainment. This application also incorporated social messaging features such as Twilio chat, AT&T SMS, and user blog post options.
                            </p>
						</figcaption>
					</figure>
				</div>
        </section>
    )
}


export default Portfolio