import React from "react"

export default function Education(props){
    return (
        <div className="section--container">
            <div className="section--item">
                <h1>Education</h1>
                <hr/>
                <p>{props.educationData.certificate}</p>
                <p>{props.educationData.institution}</p>
                <div className="header--contact">
                    <div className="header--contact--object">
                        <img className="calendar-logo" src="/images/Calendar-Logo.png"/>
                        <p className="contact-info">{props.educationData.dates}</p>
                    </div>
                    <div className="header--contact--object">
                        <img className="location-logo" src="/images/Location-Logo.png"/>
                        <p className="contact-info">{props.educationData.location}</p>
                    </div>
                </div>
                <div className="points-container">
                    <p className="point"></p>
                </div>
            </div>
        </div>
    )
}