import React, { useState } from 'react';
import OrgEventCard from './orgeventcard';
import DashboardCreateEvent from './dashboard-create-event';
import OrgDashboardAddUser from './org-dashboard-add-user';
// import EventList from './event-list'
import '../stylesheets/org-dashboard-styles/org-dash-main.css';

const OrganizationDashboard = () => {
  const [showView, setView] = useState(OrgEventCard);
  return (
    <article className="orgDash">
      <h2>ORG NAME</h2>

      <img
        className="profilePic"
        alt="user profile pic"
        src="https://placekitten.com/g/150/150"
      />
      <div className="org-dash-main-wrapper">
        <div className="org-main-buttons">
          <button className='org-main-button'onClick={() => setView(DashboardCreateEvent)}>
            Create a new event
          </button>
          <button className='org-main-button'onClick={() => setView(OrgDashboardAddUser)}>
            Add Admin
          </button>
           <button disabled className='org-main-button'onClick={() => setView()}>
            Extension
          </button>
           <button disabled className='org-main-button'onClick={() => setView()}>
            Extension
          </button>
         </div>
         <div className='org-main-events'>
        {showView}
         </div>
      </div>
    </article>
  );
};

export default OrganizationDashboard;
