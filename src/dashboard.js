import React from 'react';
import EventCard from './EventCard';
import OrgEvents from './OrgEvents';

const Dashboard = () => {
  return (
    <div className="main-dashboard">
      <OrgEvents />
      <EventCard />
    </div>
  );
};

export default Dashboard;
