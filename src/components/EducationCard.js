import React from 'react';



function EducationCard(props) {

    return (
        <div className="education-card">
            <h1>{props.school}</h1>
            <h2>{props.year}</h2>
            <p>{props.text}</p>
        </div>

    );
}

export default EducationCard;