import React from 'react';

import '../stylesheets/org-dashboard-styles/eventcard.css'

export default function EventCard(props) {

  if (!props.event) {
    return null;
  }

  return (
    <article className="event-card">
      <h3>{props.event.name}</h3>

      <p className="org-event-description">About: {props.event.description}</p>

      <p className="org-event-date">When: {props.event.date}</p>

      <p className="org-event-location">Where: {props.event.location}</p>

      <p className="org-event-contact">Contact: {props.event.contact}</p>

    </article>
  );
}
