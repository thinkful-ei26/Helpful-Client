import React from 'react';
import '../stylesheets/dashboard-create-event.css';

export default function DashboardCreateEvent() {
  return (
    <div className="create-event-form">
      <form action="submit">
        <fieldset>
          <legend>Create an event</legend>
          <div className="create-event-row">
            <label for="event-name"> Event name</label>
            <input type="text" placeholder="Event-name" />
          </div>
          <div className="reate-event-row">
            <label for="event-description"> Description</label>
            <input type="text" placeholder="Description" />
          </div>
          <div className="create-event-row">
            <label for="event-location" placeholder="Location">
              Location
            </label>
            <input type="text" />
          </div>
          <div className="create-event-row">
            <label for="event-date"> Date</label>
            <input type="text" placeholder="Date" />
          </div>
          <div className="create-event-row">
            <label for="event-contact"> Contact</label>
            <input type="text" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
