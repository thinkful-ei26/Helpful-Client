import React from 'react';
import EventCard from './eventcard';
import OrgDashboardEventButtons from './orgdashboardeventbuttons';
import '../stylesheets/dashboard.css';

const OrganizationDashboard = () => {
  return (
    <div className="main-dashboard">
      <div className="org-blob">ORG BLOB</div>
      <div className="dashboard-content">
        <OrgDashboardEventButtons />
        <EventCard />
      </div>
    </div>
  );
};

export default OrganizationDashboard;
