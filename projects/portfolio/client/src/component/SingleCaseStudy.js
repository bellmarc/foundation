import React from 'react';
import '../style/SingleCaseStudy.css';


const SingleCaseStudy = (props) => {
    console.log(props)
    return (
            <div className="single-study-container">
                <h3 className="app-description">{ props.name }</h3>
                {/* <h5 className="app-description">{props.description}</h5> */}
                <a href={ props.projectLink } alt="project">
                    <div className="feature-app-container">
                        <img className="app-photo" src={ props.imgURL } alt="screenshot of app page"
                        />
                    </div>
                </a>
            </div>
    );
}


export default SingleCaseStudy;