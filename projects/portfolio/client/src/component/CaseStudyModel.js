import React from 'react';
import '../style/CaseStudyModel.css'
import SingleCaseStudy from './SingleCaseStudy.js';
import vidly from '../assets/vidly.png';
import moxie from '../assets/moxie.png';
import scatterbrain from '../assets/scatterbrain.png';
import asoiaf from '../assets/asoiaf.png';
import lgcProducts from '../assets/lgb-products.png';


const CaseStudyModel = () => {
    let caseStudies = [
        {
            name: "Vidly",
            description: "Vidly aims to be the platform connecting videographers and customers who are capturing their special moments while traveling.",
            projectLink: "https://scatterbrainstudytool.herokuapp.com/",
            imgURL: vidly,
        },
        {
            name: "Scatterbrain Study Tool",
            description: "Collaborative project ",
            projectLink: "https://scatterbrainstudytool.herokuapp.com/",
            imgURL: scatterbrain,
        },
        {
            name: "Game of Throne's Fanpage",
            description: "Technologies included: React.js,axios, JSX, and CSS3. Utilized two APIs to create a fanpage.",
            projectLink: "https://gameofthrones.herokuapp.com/",
            imgURL: asoiaf,
        },
        {
            name: "Moxie",
            description: "As an AT&T Hackathon Entry, Moxie seeks a new way to discover content in a social platform where users can share/teach skills through videos to other users. It's main focus is on being a learning platform rather than entertainment. This application also incorporated social messaging features such as Twilio chat, AT&T SMS, and user blog post options.",
            projectLink: "https://angel.co/projects/585851-moxie?src=user_profile",
            imgURL: moxie,
        },
        {
            name: "Lash Girl Club",
            description: "A hybrid e-commerce and social media platform seeking to promote brand products through cosmetic social media influencers.",
            imgURL: lgcProducts
        }
    ]


    const allCaseStudies = caseStudies.map((caseStudy, i) => <SingleCaseStudy {...caseStudy} key= {i}/>)
    console.log(allCaseStudies)
    return (
        <section className="case-study" id="all-case-studies">
            {allCaseStudies}
        </section>
    );
}


export default CaseStudyModel;