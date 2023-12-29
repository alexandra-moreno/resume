import React from 'react';
import linkIcon from '../icons/hyperlink.png';
import '../styles/Links.css';


function Links() {
    return (
        <div className="flex-container" id="links">
            <div id="links-header">
                <h1>Important Links</h1>
            </div>
            <div className="flex-container" id="links-img">
                <img src={linkIcon} alt="student"/>
            </div>
            <div id="links-text">
                <a href="https://www.linkedin.com/in/alexandra-moreno-180a15294/" target="_blank"><div className="profile-link">LinkedIn Profile</div></a>
                <a href="https://www.freecodecamp.org/alexandra_moreno" target="_blank"><div className="profile-link">FreeCodeCamp Profile</div></a>
            </div>
        </div>
    );
}

export default Links;