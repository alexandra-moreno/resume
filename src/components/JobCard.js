import React from 'react';


function JobCard(props) {
    return (
        <div className="job-card" id={props.id}>
            <h2>{props.title}</h2>
            <h3>{props.company}</h3>
            <img src={props.icon} alt={props.id} />
            <div>{props.text}</div>
        </div>
    );

}

export default JobCard;