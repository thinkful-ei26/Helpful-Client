import React from 'react';
import '../stylesheets/org-dashboard-styles/eventcard.css'

export default function EventCard(props) {

  return (
    <article className="event-card">
      <h3>{props.event.name}</h3>

      <p className="org-event-description">{props.event.description}</p>

      <p className="org-event-date">{props.data.date}</p>

      <p className="org-event-location">{props.event.location}</p>

      <p className="org-event-contact">{props.event.contact}</p>
    </article>
  );
}
