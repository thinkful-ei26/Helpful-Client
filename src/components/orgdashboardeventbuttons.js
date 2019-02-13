import React from 'react';
import '../stylesheets/org-dashboard-styles/orgdashboardeventbuttons.css';

const OrgDashboardEventButtons = () => {
  return (
    <div className="org-dashboard-sidebar">
      <button>Create New Event</button>
      <button disabled>Invite Member</button>
      <button disabled>Promote Member</button>
    </div>
  );
};

export default OrgDashboardEventButtons;
