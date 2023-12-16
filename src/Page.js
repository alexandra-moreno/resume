import React from 'react';

import './styles/Page.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Intro from './components/Intro.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';

const Page = () => {
    return (
        <div className="page">
            <div id="first-img">
                <Header />
                <Intro />
                <About />
                <Experience />
            </div>
            <div id="second-img">
                <Education />
                <Footer />
            </div>
        </div>
    );
}

export default Page;