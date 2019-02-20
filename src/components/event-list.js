import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./eventcard";
import { API_BASE_URL } from "../config";
import '../stylesheets/event-list.css';

export default function EventList() {

  const [events, setEvents] = useState(null);
  const [rsvpEvents, setRsvpEvents] = useState(null);
  const [location, setLocation] = useState(null);

  // get user location
  const fetchUserLocation = async () => {
    if(!location) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let results = {
                lat: Number(position.coords.latitude.toFixed(7)),
                lng: Number(position.coords.longitude.toFixed(7))
            };
            setLocation(results)
          });
      }
    }
  }
  
  // get all rsvp'd events
  const fetchRsvpData = async () => {
    const rsvpEventsRequest = await axios(
      `${API_BASE_URL}/rsvp/user`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
        }
      }
    );
    setRsvpEvents(rsvpEventsRequest.data);
  }

  // get all events *filter if user allows location*
  const fetchEventData = async () => {
    if(!location) {
      axios(
        `${API_BASE_URL}/event/all`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
          }
        }
      ).then( res => {
        if(res.data) {
          setEvents(res.data)
        }
      })
    } 
    else if(location) {
      axios.get(
        `${API_BASE_URL}/event/location/2000/${location.lat}/${location.lng}`, // set at 2000 for testing
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
          }
        }
      ).then( res => {
        if(res.data) {
          setEvents(res.data)
        }
      })
    }
  }
      
  useEffect(() => {
    fetchUserLocation()
    fetchRsvpData()
    fetchEventData()
  }, [location]);

  // gets all the events out of each individual rsvp.eventId and into array
  let rsvpEventList = [];
  const generateRsvpEventList = (rsvpData) => {
    rsvpData.forEach(rsvp => {
      rsvpEventList.push(rsvp.eventId);
    })
  }

  // generate EventCard components with event data
  let rsvpEventCardList, localEventCardList;
  let eventTitle = 'Nearby Events'
  if (rsvpEvents) {
    generateRsvpEventList(rsvpEvents);
    rsvpEventCardList = rsvpEventList.map(event => {
      return <EventCard event={event} />;
    });
  }
  if(events) {
    localEventCardList = events.map(event => {
      return <EventCard event={event} />;
    });
  }
  if(!location) {
    eventTitle = 'All Events'
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="section">
          <div className="col s12">
            <span className="title">My Upcoming Events</span>
          </div>
          <div className="eventsContainer col s12 m6 l4">
            {rsvpEventCardList}
          </div>
        </div>
        <div className="section">
          <div className="col s12">
            <span className="nearby">{eventTitle}</span>
          </div>
          <div className="eventsContainer col s12 m6 l4">
            {localEventCardList}
          </div>
        </div>
      </div>
    </div>
  );
}

// TODO add button to toggle between nearby and all events or searching methods.
