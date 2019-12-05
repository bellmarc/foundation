import React from 'react';
import '../style/ParallaxDivider.css';
import gotMacbook from '../assets/got-macbook-view.png';

const ParallaxDivider = () => {
    return (
        <main className="wrapper">
            <section className="section parallax bg1">
                <h1>Game Of Thrones Fanpage </h1>
                <a href="https://gameofthrones.herokuapp.com/">
                <img src={ gotMacbook } className="macbook-img" alt="macbook view of GOT themed app"
                />
                </a>
            </section>
            <section className="section static">
                <h1> Technologies: </h1>
                <h2>ReactJS, Express, Postman, Node, MongoDB</h2>
            </section>
            <section className="section parallax bg2">
                <h1>Featured Destinations in Vidly Web App</h1>
            </section>
            <section className="section static-link">
                <h1> View Vidly Live  </h1>
            </section>
            <section className="section parallax bg3">
                <h1>Vidly C2C Travel Web Application</h1>
                <div>
                {/* <img src={ gotMacbook } className="macbook-img" alt="macbook view of GOT themed app" /> */}
                </div>
            </section>
        </main>
    )
}

export default ParallaxDivider