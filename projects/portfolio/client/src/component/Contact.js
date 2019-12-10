import React from 'react';
import '../style/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
    return (
         <section className="bg-contact">
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
            <a className="contact-icon" href="../assets/resume.pdf">
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



export default Contact