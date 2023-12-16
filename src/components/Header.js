import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <div className="header">
            <div className="header-text">
                <h1>Allie Moreno</h1>
            </div>
            <div className="navbar">
                <a href="#intro" className="navbar-link">Intro</a>
                <a href="#about" className="navbar-link">About Me</a>  
                <a href="#experience" className="navbar-link">Experience</a>
                <a href="#education" className="navbar-link">Education</a>         
            </div>
        </div>

    );
};

export default Header;