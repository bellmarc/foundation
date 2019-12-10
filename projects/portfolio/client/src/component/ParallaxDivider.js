import React from 'react';
import '../style/ParallaxDivider.css';
import Contact from '../component/Contact.js';
import gotMacbook from '../assets/got-macbook-view.png';
import mobileVidly from '../assets/vidly-mobile-demo.png';
import lashgirlecomm from '../assets/lgb-products.png';
import lashgirlecomm2 from '../assets/lgc-social.png';

const ParallaxDivider = () => {
    return (
        <main className="wrapper">
        <div className="text-overlay">
            <section className="section parallax bg1">
                <h2>Game Of Thrones Fanpage </h2>
                <a href="https://gameofthrones.herokuapp.com">
                <img src={ gotMacbook } className="macbook-img" alt="macbook view of GOT themed app"
                />
                </a>
                    <h2> Technologies: </h2>
                <h1>ReactJS, Express, Postman, Node, MongoDB</h1>

            </section>
        </div>
            <section className="section static">
                <h2> Technologies: </h2>
                <h1>ReactJS, Express, Postman, Node, MongoDB</h1>
            </section>
            <section className="section parallax bg2">
            </section>
                <img src={ mobileVidly } className="vidly-mobile" alt="mobile view of Vidly app"
                />
            <section className="section static">
                <h1> Featured Destinations </h1>
            </section>
            <section className="section parallax bg3">
                <div>

                </div>
            </section>
            {/* <section className="section static-link"> */}
                <section className="section static">
                    <h2> Lash Girl Club  </h2>
                <h1>E-commerce/Social Media Hybrid</h1>
                </section>
                    <img src={ lashgirlecomm } className="lashgirl-ecomm" alt=" screenshot of LashGirl app ecommerce products"
                    />
                    <div>
                        <img src={ lashgirlecomm2 } className="lashgirl-ecomm2" alt=" social network page screenshot of LashGirl app"
                    />
                    </div>
            {/* </section> */}
            <section className="section parallax bg4">
                <h2>Lash Girl Club is </h2>
                    <p className="description">A hybrid e-commerce and social media platform seeking to promote brand products through cosmetic social media influencers.
                    </p>
            </section>
                <section className="section static">
                    <Contact />
                </section>


        </main>
    )
}

export default ParallaxDivider