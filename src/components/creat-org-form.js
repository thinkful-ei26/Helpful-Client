import React from 'react';
import '../stylesheets/dashboard-create-event.css'

export default function CreateOrgForm() {

  return (

    <div className="create-org-form">

      <form action="submit">
        <fieldset>
          <legend>Create an Organization</legend> 

          <div className="create-org-row">
            <label htmlFor="org-name"> Event name</label>
            <input type="text" placeholder="Organization name" />
          </div>

          <div className="create-org-row">
            <label htmlFor="org-description"> Description</label>
            <input type="text" placeholder="Description" />
          </div>

          <div className="create-org-row">
            <label htmlFor="org-location" placeholder="Location">
              Location
            </label>
            <input type="text" />
          </div>

          {/* <div className="create-org-row">
            <label htmlFor="event-date"> Date</label>
            <input type="text" placeholder="Date" />
          </div> */}

          <div className="create-org-row">
            <label htmlFor="org-contact"> Contact</label>
            <input type="text" />
          </div>

        </fieldset>
      </form>
    </div>
  );
}