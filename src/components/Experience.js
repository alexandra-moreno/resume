import React from 'react';
import '../styles/Experience.css';
import worker from '../icons/student.png';
import taWorker from '../icons/student.png';
import testerWorker from '../icons/student.png';
import JobCard from './JobCard.js';


function Experience() {
    return (
        <div className="flex-container section" id="experience">
            <div className="text-section" id="experience-text">
                <h1>Work Experience</h1>
                <img src={worker} alt="work" />
            </div>
            <div>
                <JobCard id="ta" title="Online TA" company="University of Pennsylvania" text="1231241251421412" icon={taWorker}/>
                <JobCard id="tester" title="Software Tester" company="Efficient Business Systems" text="124eq94u192049121" icon={testerWorker} />              
            </div>
        </div>
    );
}

export default Experience;