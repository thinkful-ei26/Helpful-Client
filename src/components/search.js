import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SearchOrg from "./search-org";
import SearchEvent from "./search-event";
import "../stylesheets/search.css";

export default function Search(props) {

  const [component, setComponent] = useState('');
  const [events, setEvents] = useState(null);
  const [orgs, setOrgs] = useState(null);

  /* Call these on click */
  const getEvent = async () => {

    const getEvents = await axios({
      method: 'get',
      url: `${API_BASE_URL}/event/all`,
      data: {
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
      }

    });
    setEvents(getEvents.data)
  }

  const getOrg = async () => {

    const getOrgs = await axios({
      method: 'get',
      url: `${API_BASE_URL}/org/all`,
      data: {
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
      }
    });
    setOrgs(getOrgs.data)
  }

  useEffect(() => {
    getEvent();
    getOrg();
  }, []);


  return (<div>

    <div className='filter-form'>
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
    </div>

    <div className="search-container">
      <button className="search-org-button" onClick={() => setComponent(<SearchOrg history={props.history} orgs={orgs} />)}> Search Organizations</button>
      <button className="search-event-button" onClick={() => setComponent(<SearchEvent history={props.history} events={events} />)}> Search Events</button>
    </div>
    {component}
  </div>)
}
