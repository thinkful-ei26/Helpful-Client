import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SearchOrg from "./search-org";
import SearchEvent from "./search-event";
import "../stylesheets/search.css";

export default function Search(props) {
  const [component, setComponent] = useState("");

  /* Call these on click */

  const getEvent = async () => {
    const getEventPage = await axios({
      method: "post",
      url: `${API_BASE_URL}/rsvp`,
      data: {},
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    });
  };

  /* Call these on click */

  const getOrg = async () => {
    const getEventPage = await axios({
      method: "post",
      url: `${API_BASE_URL}/rsvp`,
      data: {},
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    });
  };

  return (
    <div className="container">
      <div className="filter-form center col s6">
        <h2> Filter by:</h2>
        <span className="big-font"> Distance(miles): </span>
        <select
          className="select-custom"
          onChange={e => console.log(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
        </select>
      </div>

      <div className="search-container">
        <button
          className="search-org-button"
          onClick={() => setComponent(<SearchOrg history={props.history} />)}
        >
          {" "}
          Search Organizations
        </button>
        <button
          className="search-event-button"
          onClick={() => setComponent(<SearchEvent history={props.history} />)}
        >
          {" "}
          Search Events
        </button>
      </div>
      {component}
    </div>
  );
}
