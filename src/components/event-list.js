
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './eventcard';
import { API_BASE_URL } from '../config';


import '../stylesheets/event-list.css';

export default function EventList(props) {
  // let events = [];

  const [events, setEvents] = useState(null);


  const fetchData = async() => {
    const eventsRequest = await axios(
        `${API_BASE_URL}/event/all`,
    );
    setEvents(eventsRequest.data);

  };

  useEffect(() => {
    fetchData();
  }, []);


  if (events === null) {
    return 'Loading...';
  }
  // PRODUCTION TODO ---> populate event cards with user specific event data (right now its just getting all events), 
  // and pass data down to event cards more dynamically than just event[0]
  
  return (
    <article>
        <section className="upcomingEvents">
          <h3 className="eventsHeader">My Upcoming Events</h3>

          <div className="eventsContainer">
            <EventCard event={events[0]}/>
            <EventCard event={events[1]}/>
            <EventCard event={events[2]}/>
          </div>
    </section>
  {/* // PRODUCTION TODO ---> populate event cards with specific nearby events, and pass data down
  // to event cards more dynamically than just event[0] */}
    
    <section className="nearbyEvents">
      <h3 className="eventsHeader">Events Nearby</h3>

      <div className="eventsContainer">
        <EventCard event={events[3]}/>
        <EventCard event={events[4]}/>
        <EventCard event={events[5]}/>
      </div>
    </section>
    </article>
  )
  
}

