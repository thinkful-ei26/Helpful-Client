import React from "react";
import UserComments from './usercomments'
import { Link } from 'react-router-dom';
// import "../stylesheets/org-dashboard-styles/eventcard.css";

export default function MeetupCard(props) {
  const linkUrl = `/meetup/${props.meetup.id}`;

  if (!props.meetup) {
    return null;
  }

  return (
    <Link to={linkUrl}>
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
      </div>
    </Link>
  );
}