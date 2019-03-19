import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/eventCard.css";

export default function EventCard(props) {
    const linkUrl = `/event/${props.event.id}`;

    if (!props.event) {
        return null;
    }

    return (
        <Link to={linkUrl}>
            <div className='dashboard-event-card'>
                <h3>{props.event.name}</h3>
                <div className='event-card-content'>
                    <p>{props.event.date}</p>
                    <img src={props.event.imgUrl} alt={props.event.name} />
                    <p className='card-details'>Details:</p>
                    <p>{props.event.description}</p>
                </div>
            </div>
        </Link>
    );
}
