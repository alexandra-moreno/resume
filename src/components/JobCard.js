import React from 'react';
import {useState} from 'react';


function JobCard(props) {
    const [shown, setShown] = useState("hidden-job-desc");
    const [brightness, setBrightness] = useState("normal-card");

    function handleClick() {
        if (shown === "hidden-job-desc") {
            setShown("shown-job-desc");
            setBrightness("dark-card");
        }
        else {
            setShown("hidden-job-desc");
            setBrightness("normal-card");
        }
    }

    return (
        <div className="job-card" id={props.id} onClick={handleClick}>
            <div className="job-card-header">
                <h2>{props.title}</h2>
                <h3>{props.company}</h3>
            </div>
            <div className={"job-card-img " + brightness}>
                <img src={props.icon} alt={props.id} />
            </div>
            <div className={"job-description " + shown}>hi there how are you</div>

        </div>
    );

}

export default JobCard;