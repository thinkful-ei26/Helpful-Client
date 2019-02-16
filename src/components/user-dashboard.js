import React, { useState } from 'react';
import EventList from './event-list';
import FollowedOrgs from './followed-organizations';
import CreatedOrgs from './created-organizations';
import CreateOrgForm from './creat-org-form';
import Search from './search';
import '../stylesheets/user-dashboard.css';
import { Link } from 'react-router-dom';


export default function UserDashboard(props) {

  const [showView, setView] = useState(<EventList />)

  // setView((<EventList />, 'url-string')=>(component,url){ ... } );
  return (
    <article className="orgDash">

      {showView}

      <article className="nav">
        <h2>User Name</h2>

        <img className="profilePic" alt="user profile pic" src="https://via.placeholder.com/150" />

        <div className="navButtons">
          <button onClick={() => setView(<EventList />)}>My Events</button>
          {/* <button onClick={setView()}>Find Events</button> */}
          <button onClick={() => setView(<CreateOrgForm />)}>Create Organization</button>
          <button onClick={() => setView(<FollowedOrgs />)}>Followed Organizations</button>
          <button onClick={() => setView(<CreatedOrgs setView={setView} />)}>Created Organizations</button>
          <button onClick={() => props.history.push('/search')} > dash</button>
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