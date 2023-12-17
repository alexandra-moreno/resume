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
            <text>Java</text><br/>
            <text>C/C#</text><br/>
            <text>MySQL</text><br/>
            <text>JavaScript</text>
        </>
       
    );
}

function About() {
    return (
        <div className="flex-container section" id="about">
            <div className="flex-container" id="about-box">
                <AboutCard name="Hard-Worker" icon={hardWorkIcon} id="hard-worker" text="Graduated from UCSD in two years."/>
                <AboutCard name="Aspiring Programmer" icon={computer} id="programmer" text={<LanguageList />}/>
                <AboutCard name="Loving Mother" icon={motherIcon} id="mother" text="Mother to two amazing kids"/>
            </div>
        </div>
    );
}

export default About;