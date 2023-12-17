import React from 'react';
import '../styles/Education.css';
import EducationCard from './EducationCard.js';


function Education() {
    return (
        <div className="flex-container section" id="education">
            <div id="education-header">
                <h1>Education</h1>
            </div>
            <EducationCard />
            <EducationCard />
            <EducationCard />
            <EducationCard />
        </div>
    );
}

export default Education;