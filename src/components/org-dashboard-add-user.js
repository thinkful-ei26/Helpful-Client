import React from 'react';
// import '../stylesheets/dashboard-create-event.css';

export default function OrgDashboardAddUser() {
  return (
    <div className="create-event-form">
      <form action="submit">
        <fieldset>
          <legend>Add User Roles</legend>
          <div className="create-event-row">
            <label for="event-name"> Name</label>
            <input type="text" placeholder="Event-name" />
          </div>
          <div className="create-event-row">
            <label for="event-description"> Description</label>
            {/* <input type="text" placeholder="Description" /> */}
            <select name="assign-admin-privileges" id="">
              <option value="admin">Admin</option>
              <option value="">Blank 1</option>
              <option value="">Blank 2</option>
            </select>
          </div>
          {/* <div className="create-event-row">
            <label for="event-location" placeholder="Location">
              Location
            </label>
            <input type="text" />
          </div> */}
          {/* <div className="create-event-row">
            <label for="event-date"> Date</label>
            <input type="text" placeholder="Date" />
          </div> */}
          {/* <div className="create-event-row">
            <label for="event-contact"> Contact</label>
            <input type="text" />
          </div> */}
          <div className="submit-cancel-buttons">
            <button className="submit">Submit</button>
            <button>Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
