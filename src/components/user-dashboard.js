import React, { useState } from 'react';
import EventList from './event-list';
import FollowedOrgs from './followed-organizations';
import CreatedOrgs from './created-organizations';
import createOrgForm from './creat-org-form';
import '../stylesheets/user-dashboard.css';


export default function UserDashboard() {

  const [showView, setView] = useState(EventList)

  
    return (
      <article className="orgDash">
        <h2>User Name</h2>

        <img className="profilePic" alt="user profile pic" src="https://via.placeholder.com/150" />

        {showView}

        <article className="nav">
          <button onClick={() => setView(EventList)}>My Events</button>
          {/* <button onClick={setView()}>Find Events</button> */}
          <button onClick={() => setView(createOrgForm)}>Create Organization</button>
          <button onClick={() => setView(FollowedOrgs)}>Followed Organizations</button>
          <button onClick={() =>setView(CreatedOrgs)}>Created Organizations</button>
        </article>
    
      </article>
    )
  
  
    // return (
    //   <article className="orgDash">
    //     <h2>User Name</h2>

    //     <img className="profilePic" alt="user profile pic" src="https://via.placeholder.com/150" />

    //     <EventList /> 

    //     <FollowedOrgs />

    //     <CreatedOrgs />

    //     <article className="nav">
    //       <button>Find Events</button>
    //       <button>Create Organization</button>
    //       <button>Followed Organizations</button>
    //       <button>Created Organizations</button>
    //     </article>
    
    //   </article>
    // )
  
}