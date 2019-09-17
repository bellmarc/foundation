import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Services() {
    return(
        <>
        <div className="services-intro">
            <p>At Bell & Bowen, we believe in approaching client's needs using effective design-thinking methodology and integrating the latest technologies, scalable  Web-based applications that foster company growth and promotes user retention.</p>
        </div>
        <ul className="services-list">

            <p className="specialize">We Specialize In:</p>

            <FontAwesomeIcon icon="desktop"/>
            <li>Website Development/Re-design</li>
            <FontAwesomeIcon icon="pencil-ruler"/>
            <li>Wire-framing and Mockups</li>

            <FontAwesomeIcon icon="search"/>

            <li> Search Engine Optimization (SEO)</li>

            <FontAwesomeIcon icon="database"/>
            <li>Data Migration</li>
            <FontAwesomeIcon icon="tools"/>
            <li>Site Maintenance</li>
            <FontAwesomeIcon icon="receipt"/>
            <li>Price Quotes</li>
        </ul>
        </>
    )
}

export default Services