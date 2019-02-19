import React from "react";
import "../stylesheets/org-card.css";

export default function OrganizationCard(props) {
  if (!props.org) {
    return "Loading...";
  }

  return (
    <div className="col s8 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src="http://lorempixel.com/400/400" />
        </div>
        <div className="card-content">
          <p className="flow-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <span className="flow-text">{props.org.name}</span>
        </div>
        <div className="card-action">
          <p className="flow-text truncate">
            <a href="#"> About: {props.org.description}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
