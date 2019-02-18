import React from "react";
import "../stylesheets/org-card.css";

export default function OrganizationCard(props) {
  if (!props.org) {
    return "Loading...";
  }

  return (
    <section className="orgCard">
      <h3>{props.org.name}</h3>

      <p>About: {props.org.description}</p>
    </section>
  );
}
