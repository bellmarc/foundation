import React from 'react';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
         <section id="contact"  className="bg-contact">
            <div className="container text-center">

                {/* <p className="contact-text">I work with organizations with a growth mindset for both business and team members, offering creative freedom, and are ready to build innovative products and/or services.
                </p> */}
            </div>
            <div className="flex-container contact-links">
                <a className="contact-icon" href="mailto:marcielobell@gmail.com">
                <FontAwesomeIcon          icon="envelope"
                    color="#050038"
                    size="3x"
                    /* className="icon" */
                    aria-label="Send me an email: marcielobell.email@gmail.com"
                    title="My Email"
                    role="img"
                />
                </a>
                <a className="contact-icon"
                href="https://www.linkedin.com/in/bellmarcielo">
                <FontAwesomeIcon icon={["fab", "linkedin"]}
                    color="#050038"
                    size="3x"
                    /* className="icon" */
                    aria-label="View my LinkedIn Account: bellmarcielo"
                    title="My LinkedIn"
                    role="img"
                />
                </a>
          <a className="contact-icon" href="https://www.github.com/bellmarc">
            <FontAwesomeIcon icon={["fab", "github-alt"]}
              color="#050038"
              size="3x"
              className="icon"
              aria-label="See my GitHub Account: bellmarc"
              title="My GitHub"
              role="img"
            />
          </a>
          {/* Google secure link
          https://doc-04-84-apps-viewer.googleusercontent.com/viewer/secure/pdf/0c4nfl8j7e8ruan3trisca1alounh6lu/dul3plu29uec77b58cd1pig5gnu5dh4p/1578361800000/drive/02787538876332466109/ACFrOgAQNRbVkyfmRg6GvdzRR0sZ9Kx39teoOogQITPauCscXcgOVNSbNWqGB9m6mB1fm19kN6tEkFJVYvAKeDTizrIbotisMrVgHrTexDxRzW-9vJSZ6JEM-SkGq0-5IOcoJ-8fobISWeBlOuR7?print=true&nonce=fdl7g1ns0n6qs&user=02787538876332466109&hash=8erkug2mfq1ur8rh1iirgthr8gfgof4r
          */}
            <a className="contact-icon" href="https://docs.google.com/document/d/1mBxMElgM5zDwdatTPt6EUl8o6xrd_cEkxfqdlILkjcs/edit?usp=sharing">
            <FontAwesomeIcon icon="file"
              color="#050038"
              size="3x"
              /* className="icon" */
              aria-label="View my Resume in PDF format"
              role="img"
              title="My Resume"
            />
            </a>
            </div>
        </section>
    )
}



export default Footer