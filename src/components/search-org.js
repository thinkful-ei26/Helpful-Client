import React, { useState, useEffect } from "react";
import { InitialMap } from "./map";
import "../stylesheets/search-org.css";
import { Link } from "react-router-dom";

export default function SearchOrg(props) {
  if (props.orgs) {
    const listNames = props.orgs.map((org, index) => {
      const linkUrl = `/organization/${org.id}`;
      return (
        <Link key={index} to={linkUrl}>
          {" "}
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{org.name}</span>
              <p>{org.description}</p>
            </div>
            <div className="card-action">
              <span>{org.date}</span>
              <span>{org.location}</span>
              <span>{org.contact}</span>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div>
        <InitialMap
          location={props.location}
          markers={props.orgs}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <h3>{listNames}</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2> Loading organizations...</h2>
      </div>
    );
  }
}
