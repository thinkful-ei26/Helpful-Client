import React from 'react';
import OrgDashboardEvents from './OrgDashboardEvents';
import OrgEvents from './OrgEvents';

const Dashboard = () => {
  return (
    <div className="main-dashboard">
    <OrgEvents/>
      <OrgDashboardEvents />
    </div>
  );
};

export default Dashboard;
