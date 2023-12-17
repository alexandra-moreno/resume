import React from 'react';
import '../styles/Education.css';
import EducationCard from './EducationCard.js';
import Arrow from './Arrow.js';

const UCSDText = () => {
    return (
        <>
            <text>GPA: 3.5</text><br/>
            <text>BS in Cognitive & Behavioral Neuroscience</text><br/>
            <text>Minor in Education Studies</text><br/>
            <text>Earned Degree in Two Years</text>
        </>

    );
}

const PennText = () => {
    return (
        <>
            <text>GPA: 3.8</text><br/>
            <text>Masters of Computer & Information Technology</text><br/>
            <text>Worked as Online TA in Spring 2020</text><br/>
            <text>Received a TA Award</text>
        </>

    );
}

const GAText = () => {
    return (
        <>
            <text>Currently Enrolled</text><br/>
            <text>Working Toward MS in Computer Science</text><br/><br/>
            <text id="text-italics">Ready to begin my career!</text>
        </>

    );
}

function Education() {
    return (
        <div className="flex-container section" id="education">
            <div id="education-header">
                <h1>Education</h1>
            </div>
            <div id="education-cards">
            <EducationCard school="University of California, San Diego" year="2015-2017" text={<UCSDText/>} />
            <Arrow />
            <EducationCard school="University of Pennsylvania" year="2019-2021" text={<PennText/>}/>
            <Arrow />
            <EducationCard school="Georgia Institute of Technology" year="2022-Present" text={<GAText/>} />
            </div>
        </div>
    );
}

export default Education;