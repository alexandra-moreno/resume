import React from 'react';
import '../styles/Experience.css';
import worker from '../icons/video-call.png';
import taWorker from '../icons/campus.png';
import testerWorker from '../icons/checklist.png';
import JobCard from './JobCard.js';

const TaText = () => {
    return (
        <>
            <p>JAN 2020 - MAY 2020</p>
            <p>Assisted/Lead Zoom Recitations (similar to programming walk-throughs)</p>
            <p>Hosted Online Office Hours for Students</p>
            <p>Won a TA Award for Excellence in Student Support</p>
        </>
    )
}

const TesterText = () => {
    return (
        <>
        <p>NOV 2023 - PRESENT</p>
        <p>Reported bugs found in UWP/Mobile application</p>
        <p>Wrote and executed manual test cases for application</p>
        <p>Helped revise reports per customer requirements</p>
        </>
    )
}

function Experience() {
    return (
        <div className="flex-container section" id="experience">
            <div className="flex-container text-section" id="experience-text">
                <h1>Work Experience</h1>
                <p>I have been a stay-at-home mother for five years, but I was fortunate to gain a little experience along the way.</p>
                <img src={worker} alt="work" id="worker"/>
            </div>
            <div className="flex-container" id="job-cards">
                <JobCard id="ta" title="Online TA" company="University of Pennsylvania" text={<TaText />} icon={taWorker}/>
                <JobCard id="tester" title="Software Tester" company="Efficient Business Systems" text={<TesterText />} icon={testerWorker} />              
            </div>
        </div>
    );
}

export default Experience;