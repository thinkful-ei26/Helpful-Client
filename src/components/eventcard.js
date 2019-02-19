import React from 'react';

import '../stylesheets/org-dashboard-styles/eventcard.css'

export default function EventCard(props) {

  if (!props.event) {
    return null;
  }

  return (
    // materialize card
    <div className="row">
      <div className="cardWrapper">
        <div className="col s12 m7">

          <div class="card-image">
            <img src={props.event.imgUrl} alt="event card background"/>
            <span className="card-title">{props.event.name}</span>
          </div>

          <div className="card-content">
            <p className="org-event-description">About: {props.event.description}</p>

            <p className="org-event-date">When: {props.event.date}</p>

            <p className="org-event-location">Where: {props.event.location}</p>

            <p className="org-event-contact">Contact: {props.event.contact}</p>
          </div>
          
          <div className="card-action">
            <a href="#">Go to Event Page</a>
          </div>
        </div>
      </div>
    </div>
    // original card
    // <article className="event-card">
    //   <h3>{props.event.name}</h3>

    //   <p className="org-event-description">About: {props.event.description}</p>

    //   <p className="org-event-date">When: {props.event.date}</p>

    //   <p className="org-event-location">Where: {props.event.location}</p>

    //   <p className="org-event-contact">Contact: {props.event.contact}</p>

    // </article>
  );
}
