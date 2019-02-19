import React from "react";
import "../stylesheets/org-card.css";

export default function OrganizationCard(props) {
  if (!props.org) {
    return "Loading...";
  }

  return (
    <div className="row">
      <div className="card">
        <div className="card-image">
          <img src="http://lorempixel.com/500/500" />
          <span className="card-title">{props.org.name}</span>
        </div>
        <div className="card-content">
          <p>{props.org.description}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
}
