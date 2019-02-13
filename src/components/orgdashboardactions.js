import React from 'react';
import '../stylesheets/org-dashboard-styles/orgdashboardactions.css';

const OrgDashboardActions = () => {
  return (
    <div className="org-dashboard-sidebar">
      <button>Create New Event</button>
      <button disabled>Invite Member</button>
      <button disabled>Promote Member</button>
    </div>
  );
};

export default OrgDashboardActions;
