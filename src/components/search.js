import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SearchOrg from "./search-org";
import SearchEvent from "./search-event";
import "../stylesheets/search.css";

export default function Search(props) {
  const [component, setComponent] = useState("");
  const [events, setEvents] = useState(null);
  const [orgs, setOrgs] = useState(null);
  const [location, setLocation] = useState(null);

  // get user location
  const fetchUserLocation = async () => {
    if (!location) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          let results = {
            lat: Number(position.coords.latitude.toFixed(7)),
            lng: Number(position.coords.longitude.toFixed(7))
          };
          setLocation(results);
        });
      }
    }
  };

  /* Call these on click */
  const getEvent = async () => {
    if (location === null) {
    } else {
      const url = `${API_BASE_URL}/event/location/10000/${location.lat}/${
        location.lng
      }`;
      const getEvents = await axios({
        method: "get",
        url: url,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
        }
      });
      setEvents(getEvents.data);
    }
  };

  const getOrg = async () => {
    const getOrgs = await axios({
      method: "get",
      url: `${API_BASE_URL}/org/location/10000/45/-105`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    });

    setOrgs(getOrgs.data);
  };

  useEffect(() => {
    fetchUserLocation();
    getEvent();
    getOrg();
  }, [location]);

  if (location === null) {
    return <div />;
  } else {
    return (
      <div className="container">
        {/* <div className='filter-form'>
      <h2> Filter by:</h2>
      <div>
        <span className='big-font'> Distance(miles): </span>
        <select className='select-custom' onChange={e => console.log(e.target.value)}>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
          <option value='150'>150</option>
        </select>
      </div>
    </div> */}

        <div className="search-container center">
          <button
            onClick={() =>
              setComponent(
                <SearchOrg
                  history={props.history}
                  location={location}
                  orgs={orgs}
                />
              )
            }
            style={{
              width: "175px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable teal lighten-2"
          >
            Organizations
          </button>
          <button
            onClick={() =>
              setComponent(
                <SearchEvent
                  history={props.history}
                  location={location}
                  events={events}
                />
              )
            }
            style={{
              width: "175px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable teal lighten-2"
          >
            Events
          </button>
        </div>
        {component}
      </div>
    );
  }
}
