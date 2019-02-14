import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './eventcard';
import { API_BASE_URL } from '../config';

import '../stylesheets/event-list.css';

export default function EventList(props) {
  // let events = [];

  const [events, setEvents] = useState(null);

  const fetchData = async () => {
    const eventsRequest = await axios(`${API_BASE_URL}/event/all`);
    console.log('setEvents setting to: ', eventsRequest.data);
    return setEvents(eventsRequest.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (events) {
    const eventsRender = events.map((event,index) => {
      return( <EventCard key={index} event={event} />);
    });
    return (
      <article>
        <section className="upcomingEvents">
          <h3 className="eventsHeader">My Upcoming Events</h3>

          <div className="eventsContainer">{eventsRender}</div>
        </section>

        <section className="nearbyEvents">
          <h3 className="eventsHeader">Events Nearby</h3>

          {/* <div className="eventsContainer">
        <EventCard />
        <EventCard />
        <EventCard />
      </div> */}
        </section>
      </article>
    );
  }
  return <p>loading...</p>;
}
