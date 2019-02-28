import React from "react";
import { Link } from 'react-router-dom';
import "../stylesheets/eventcard.css";

export default function EventCard(props) {
  const linkUrl = `/event/${props.event.id}`;

  if (!props.event) {
    return null;
  }

  return (
      <div className="dashboard-event-card">
        <Link to={linkUrl}>
          <h3>{props.event.name}</h3>
        </Link>
        <div className="event-card-content">
          <p>{props.event.date}</p>
          <img src={props.event.imgUrl} alt={props.event.name}></img>
          <p className='card-details'>Details:</p>
          <p>{props.event.description}</p>
          <p>{props.event.location}</p>
          <p>{props.event.contact}</p>
        </div>
    </div>
  );
}
