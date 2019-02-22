import React from "react";
import UserComments from './usercomments'

// import "../stylesheets/org-dashboard-styles/eventcard.css";

export default function EventCard(props) {
  if (!props.event) {
    return null;
  }

  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.event.name}</span>
        <p>{props.event.description}</p>
      </div>
      <div className="card-action">
        <span>{props.event.date}</span>
        <span>{props.event.location}</span>
        <span>{props.event.contact}</span>
      </div>
      <UserComments eventId={props.event.id} />
    </div>
  );
}
