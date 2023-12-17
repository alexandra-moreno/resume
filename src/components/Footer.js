import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="flex-container footer">
            <div id="footer-top">
                <div>Allie Moreno's Resume</div>
                <div><a href="#top">Back to Top</a></div>
            </div>
            <div className="flex-container" id="footer-bottom">
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/newborn" title="newborn icons">Newborn icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/college" title="college icons">College icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/virtual-event" title="virtual event icons">Virtual event icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/school" title="school icons">School icons created by Freepik - Flaticon</a></div>
                <div className="attributions"><a href="https://www.flaticon.com/free-icons/checklist" title="checklist icons">Checklist icons created by Freepik - Flaticon</a></div>
            </div>
        </div>

    );
}

export default Footer;