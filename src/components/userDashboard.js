import React from "react";
import EventList from "./eventList";
import CreatedOrgs from "./createdOrganizations";
import FollowedOrgs from "./followedOrganizations";

import "../stylesheets/dashboard.css";

export default function UserDashboard() {
    return (
        <section className='dashboard-container'>
            <EventList />
            <div className='dashHr' />
            <FollowedOrgs />
            <div className='dashHr' />
            <CreatedOrgs />
        </section>
    );
}
