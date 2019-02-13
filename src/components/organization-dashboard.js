import React, { useState } from 'react';
import OrgEventCard from './orgeventcard'
import DashboardCreateEvent from './dashboard-create-event';
import '../stylesheets/dashboard.css';

const OrganizationDashboard = () => {
  const [showView, setView] = useState(OrgEventCard);
  return (
    <article className="orgDash">
      <h2>ORG NAME</h2>
      <img
        className="profilePic"
        alt="user profile pic"
        src="https://via.placeholder.com/150"
      />

      {showView}

      <div className="org-main">
        <button onClick={() => setView(DashboardCreateEvent)}>
          Create a new event
        </button>
      </div>
    </article>
  );
};

export default OrganizationDashboard;
