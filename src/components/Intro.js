import React from 'react';
import '../styles/Intro.css';
import student from '../icons/student.png';

function Intro() {

    return (
        <div className="flex-container" id="intro">
            <div id="intro-text">
                <h1>Nice to meet you!</h1>
                <text>My name is Allie Moreno. I am an online student at Georgia Tech, studying to earn a Masters in Computer Science. I may not have begun my educational path in CS, but I have worked hard to dive deep into my CS studies. I am ready to break into a career in Software Development! Take a look around my page to learn more about me.</text>
            </div>
            <div id="icon-1">
                <img src={student} alt="student" />
            </div>
        </div>

    );
}

export default Intro;