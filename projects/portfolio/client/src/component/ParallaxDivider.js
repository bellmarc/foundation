import React from 'react';
import '../style/ParallaxDivider.css';


const ParallaxDivider = () => {
    return (
        <main class="wrapper">
            <section class="section parallax bg1">
                <h1>Vidly C2C Travel Web Application</h1>
            </section>
            <section class="section static">
                <h1> Technologies Used: </h1>
                <h2>ReactJS, Express, Postman, Node.js, MongoDB</h2>
            </section>
            <section class="section parallax bg2">
                <h1>Featured Destinations in Vidly Web App</h1>
            </section>
            <section class="section static-link">
                <h1> View Vidly Live  </h1>
            </section>
        </main>
    )
}

export default ParallaxDivider