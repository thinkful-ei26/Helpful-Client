import React, {useEffect} from 'react';
import EventCard from './eventcard'
import '../stylesheets/event-list.css';

export default function EventList(props) {

  useEffect(() => {
    
  })

  return (
    <article>
        <section className="upcomingEvents">
          <h3 className="eventsHeader">My Upcoming Events</h3>

          <div className="eventsContainer">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
    </section>

    <section className="nearbyEvents">
      <h3 className="eventsHeader">Events Nearby</h3>

      <div className="eventsContainer">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
    </article>
  )
}