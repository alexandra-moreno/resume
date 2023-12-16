import React from 'react';
import '../styles/Intro.css';
import {useState} from 'react';
import student from '../icons/student.png';
import student_no_eyes from '../icons/student_no_eyes.png';

const Eyes = () => {
    return (
        <div id="eyes">
            <div className="eye" id="left-eye"></div>
            <div className="eye" id="right-eye"></div>
            <div className="eye-close" id="left-eye-close"></div>
            <div className="eye-close" id="right-eye-close"></div>
        </div>

    );
}

function Intro() {
    const [studentImage, setStudentImage] = useState(student);
    const [closedEyes, setClosedEyes] = useState(false);

    function closeEyes() {
        setStudentImage(student_no_eyes);
        setClosedEyes(true);

    }

    function openEyes() {
        setStudentImage(student);
        setClosedEyes(false);
    }

    return (
        <div className="flex-container" id="intro">
            <div className="text-section" id="intro-text">
                <h1>Nice to meet you!</h1>
                <text>My name is Allie Moreno. I am an online student at Georgia Tech, studying to earn a Masters in Computer Science. I may not have begun my educational path in CS, but I have worked hard to dive deep into my CS studies. I am ready to break into a career in Software Development! Take a look around my page to learn more about me.</text>
            </div>
            <div id="icon-1">
                <img onMouseDown={closeEyes} onMouseUp={openEyes} src={studentImage} alt="student" />
                {closedEyes && <Eyes />}
                {closedEyes && <div id="mouth"></div>}
            </div>
        </div>

    );
}

export default Intro;