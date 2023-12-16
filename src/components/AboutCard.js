import React from 'react';
import {useState} from 'react';


function AboutCard(props) {
    // usetState source: https://www.w3schools.com/react/react_usestate.asp
    const [hidden, setHidden] = useState("hidden-txt");
    const [size, setSize] = useState("normal-size");

    function toggleSize() {
        if (size === "normal-size") {
            setSize("larger-size");
            setHidden("shown-txt");
        }
        else {
            setSize("normal-size");
            setHidden("hidden-txt");
        }
    }
    return (
        <div className="about-card">
            <p>{props.name}</p>
            <div className="card-image" onClick={toggleSize}>
                <img className={size} src={props.icon} alt={props.id} />
                <div className={hidden} id={props.id}>{props.text}</div>
            </div>
        </div>
    );
}

export default AboutCard;