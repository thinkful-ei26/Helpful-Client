import React from 'react';
import EventCard from './eventcard';
import OrgDashboardActions from '../components/orgdashboardactions';
import '../stylesheets/org-dashboard-styles/organization-dashboard.css';

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
