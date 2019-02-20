import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { InitialMap } from "./map";
import "../stylesheets/search-org.css";

export default function SearchOrg(props) {
  // const [orgs, setOrgs] = useState(null);

  // const fetchData = async () => {

  //     const getOrgs = await axios({
  //         method: 'get',
  //         url: `${API_BASE_URL}/org/all`,
  //         data: {
  //         },
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
  //         }
  //     });
  //     setOrgs(getOrgs.data)
  // }

  // useEffect(() => {
  //     fetchData();
  // }, []);
  //   onClick={() => props.history.push("/organization")}

  if (props.orgs) {
    const listNames = props.orgs.map(org => {
      return (
        <Link to={`/organization/${org.id}`}>
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
