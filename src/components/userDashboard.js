import React from "react";
import EventList from "./eventList";
import CreatedOrgs from "./createdOrganizations";
import FollowedOrgs from "./followedOrganizations";

export default function UserDashboard() {
    return (
        <div className='container'>
            <EventList />
            <FollowedOrgs />
            <CreatedOrgs />
        </div>
    );
}
