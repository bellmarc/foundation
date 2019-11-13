import React from 'react';
import CaseStudyModel from './CaseStudyModel.js';
import '../style/CaseStudy.css';


const CaseStudy = () => {
    return (
        <div className="project-container">
            <h2 className="cs-title">Case Studies</h2>
            <CaseStudyModel />
        </div>
    )
}



export default CaseStudy