import React from 'react';
import EventCard from './eventcard';
import OrgDashboardActions from './orgdashboardactions';
import './dashboard.css';

const OrganizationDashboard = () => {
  return (
    <div className="main-dashboard">
      <div className="org-blob">ORG BLOB</div>
      <div className="dashboard-content">
        <OrgDashboardActions />
        <EventCard />
      </div>
    </div>
  );
};

export default OrganizationDashboard;
