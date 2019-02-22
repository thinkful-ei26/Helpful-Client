import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { InitialMap } from "./map";
import "../stylesheets/search-event.css";
import { Link } from 'react-router-dom';

export default function SearchEvent(props) {
  // const [events, setEvents] = useState(null);


  if (props.events) {
    const listNames = props.events.map((event, index) => {
      const linkUrl = `/event/${event.id}/${event.organizationId}`;
      return <Link key={index} to={linkUrl}><div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{event.name}</span>
          <p>{event.description}</p>
        </div>
        <div className="card-action">
          <span>{event.date}</span>
          <span>{event.location}</span>
          <span>{event.contact}</span>
        </div>
      </div>
      </Link>
    })
    return (<div>
      <InitialMap
        markers={props.events}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <h3>{listNames}</h3>
    </div>)
  } else {
    return (<div>

      <h2> Loading Events...</h2>
    </div>
    );
  }
}
