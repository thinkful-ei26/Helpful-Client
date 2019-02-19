import React from "react";
import "../stylesheets/org-card.css";

export default function OrganizationCard(props) {
  if (!props.org) {
    return "Loading...";
  }

  return (
    <div className="row">
      <div className="s12">
        <div className="card">
          <div className="card-image">
            <img src="http://lorempixel.com/400/400" />
            <span className=" card-title orgCard">Group logo, etc.</span>
          </div>
          <div className="card-content">
            <p className="flow-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
            <h2>{props.org.name}</h2>
          </div>
          <div className="card-action">
            <p className="flow-text">
              <a href="#"> About: {props.org.description}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
