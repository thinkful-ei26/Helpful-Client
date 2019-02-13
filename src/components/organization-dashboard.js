import React, { useState } from 'react';
import EventList from './event-list';
import EventCard from './eventcard';
import DashboardCreateEvent from './dashboard-create-event'
// import createOrgForm from './creat-org-form';
import '../stylesheets/dashboard.css';

const OrganizationDashboard = () => {
  const [showView, setView] = useState(EventList);
  return (
    <article className="orgDash">
        <h2>ORG NAME</h2>

        <img className="profilePic" alt="user profile pic" src="https://via.placeholder.com/150" />

        {showView}

        <article className="nav">
        <button onClick={()=>setView(DashboardCreateEvent)}>Create a new event</button>
          {/* <button onClick={() => setView(EventList)}>My Events</button> */}
          {/* <button onClick={setView()}>Find Events</button> */}
          {/* <button onClick={() => setView(createOrgForm)}>Create Organization</button> */}
          {/* <button onClick={() => setView(FollowedOrgs)}>Followed Organizations</button> */}
          {/* <button onClick={() =>setView(CreatedOrgs)}>Created Organizations</button> */}
        </article>
    
      </article>
    // <div className="main-dashboard">
    //   <div className="org-blob">ORG BLOB</div>
    //   <div className="dashboard-content">
    //     {/* <OrgDashboardEventButtons /> */}
    //     <EventCard />
    //   </div>
    // </div>
  );
};

export default OrganizationDashboard;
