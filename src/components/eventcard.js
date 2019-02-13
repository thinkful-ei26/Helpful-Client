import React from 'react';
import '../stylesheets/eventcard.css';

export default function EventCard() {
  return (
    <div className="event-card">
      Name: Event 1
      <div className="org-event-description">
        Description: This is the event description
      </div>
      <div className="org-event-date">Date: 03/11/2019</div>
      <div className="org-event-location">
        Location: 10003 N South St, Southtonville
      </div>
      <div className="org-event-contact">Contact: Mr. B</div>
    </div>
  );
}
