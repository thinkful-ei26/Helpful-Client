import React, { Component } from 'react';
import '../stylesheets/user-dashboard.css';

export default class UserDashboard extends Component {
  state={
    description:'',
    name:'',
    
  }
  render() {
    return (
      <div className="orgDash">
        <h2>User Name</h2>

        <img
          className="profilePic"
          alt="user profile pic"
          src="https://via.placeholder.com/150"
        />

        <section className="upcomingEvents">
          <h3 className="eventsHeader">My Upcoming Events</h3>

          <div className="eventsContainer">
            event cards go here....
            {/* render event card components */}
          </div>
        </section>

        <section className="nearbyEvents">
          <h3 className="eventsHeader">Events Nearby</h3>

          <div className="eventsContainer">
            event cards go here....
            {/* render event card components */}
          </div>
        </section>

        <article className="nav">
          <button>Find Events</button>
          <button>Create Organization</button>
          <button>Followed Organizations</button>
          <button>Created Organizations</button>
        </article>
      </div>
    );
  }
}
