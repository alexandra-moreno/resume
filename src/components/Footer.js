import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="flex-container footer">
            <div id="footer-top">
                <div>Allie Moreno's Resume<span></span><a href="/">Back to Top</a></div>
            </div>
            <div className="attributions"><a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a></div><br/>
            <div className="attributions"><a href="https://www.flaticon.com/free-icons/newborn" title="newborn icons">Newborn icons created by Freepik - Flaticon</a></div>
            <div className="attributions"><a href="https://www.flaticon.com/free-icons/college" title="college icons">College icons created by Freepik - Flaticon</a></div>
            <div className="attributions"><a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a></div>
        </div>

    );
}

export default Footer;