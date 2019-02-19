import React from "react";

// import "../stylesheets/org-dashboard-styles/eventcard.css";

export default function EventCard(props) {
  if (!props.event) {
    return null;
  }

  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{props.event.name}</span>
            <p>{props.event.description}</p>
          </div>
          <div class="card-action">
            <span>{props.event.date}</span>
            <span>{props.event.location}</span>
            <span>{props.event.contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
