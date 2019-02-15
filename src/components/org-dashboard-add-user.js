import React from 'react';
// import '../stylesheets/dashboard-create-event.css';

export default function OrgDashboardAddUser() {
  return (
    <div className="create-event-form">
      <form action="submit">
        <fieldset>
          <legend>Add User Roles</legend>
          <div className="create-event-row">
            <label htmlFor="event-name"> Name</label>
            <input type="text" placeholder="member-name" />
          </div>
          <div className="create-event-row">
            <label htmlFor="event-description"> Description</label>
            <select name="assign-admin-privileges" id="">
              <option value="admin">Admin</option>
              <option value="">Blank 1</option>
              <option value="">Blank 2</option>
            </select>
          </div>
          <div className="submit-cancel-buttons">
            <button className="submit">Submit</button>
            <button>Cancel</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
