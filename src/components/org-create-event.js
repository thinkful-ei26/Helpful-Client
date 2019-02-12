import React from 'react';

export default function OrgCreateEvent() {
  return (
    <div>
      <form action="submit">
        <fieldset>
          <legend>Create an event</legend>
          <div className="org-create-event-row">
            <label for="event-name">Event name</label>
            <input type="text" placeholder="Event-name" />
          </div>
          <div className="org-create-event-row">
            <label for="event-description">Description</label>
            <input type="text" placeholder="Description" />
          </div>
          <div className="org-create-event-row">
            <label for="event-location" placeholder="Location">
              Location
            </label>
            <input type="text" />
          </div>
          <div className="org-create-event-row">
            <label for="event-date">Date</label>
            <input type="text" placeholder="Date" />
          </div>
          <div className="org-create-event-row">
            <label for="event-contact">Contact</label>
            <input type="text" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
