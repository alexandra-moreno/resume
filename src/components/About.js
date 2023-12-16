import React from 'react';
import '../styles/About.css';
import hardWorkIcon from '../icons/college.png';
import computer from '../icons/computer.png';
import motherIcon from '../icons/newborn.png';
//import image source: https://stackoverflow.com/questions/34582405/react-wont-load-local-images
// onMouseEnter source: https://upmostly.com/tutorials/react-onhover-event-handling-with-examples

import AboutCard from './AboutCard.js';

function LanguageList() {
    return (
        <>
            <p>Java</p>
            <p>C/C#</p>
            <p>MySQL</p>
            <p>JavaScript</p>
        </>
       
    );
}

function About() {
    return (
        <div className="flex-container section" id="about">
            <div className="flex-container" id="about-box">
                <AboutCard name="Hard-Worker" icon={hardWorkIcon} alt="hard-worker" text="Graduated from UCSD in 2 years with a major in Cognitive & Behavioral Neuroscience"/>
                <AboutCard name="Aspiring Programmer" icon={computer} alt="programmer" text={<LanguageList />}/>
                <AboutCard name="Loving Mother" icon={motherIcon} alt="mother" text="Mother to two amazing kids; the best parts of my life"/>
            </div>
        </div>
    );
}

export default About;