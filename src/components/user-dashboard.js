import React, { useState } from 'react';
import EventList from './event-list';
import FollowedOrgs from './followed-organizations';
import CreatedOrgs from './created-organizations';
import CreateOrgForm from './creat-org-form';
import '../stylesheets/user-dashboard.css';


export default function UserDashboard() {

  const [showView, setView] = useState(<EventList />)
  console.log(showView);

  // setView((<EventList />, 'url-string')=>(component,url){ ... } );
    return (
      <article className="orgDash">
    
        {showView}

        <article className="nav">
          <h2>User Name</h2>

          <img className="profilePic" alt="user profile pic" src="https://via.placeholder.com/150" />

          <div className="navButtons">
            <button onClick={() => setView(<EventList />, 'url string')}>My Events</button>
            {/* <button onClick={setView()}>Find Events</button> */}
            <button onClick={() => setView(<CreateOrgForm />)}>Create Organization</button>
            <button onClick={() => setView(<FollowedOrgs />)}>Followed Organizations</button>
            <button onClick={() =>setView(<CreatedOrgs setView={setView}/>)}>Created Organizations</button>
          </div>
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