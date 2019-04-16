import React, { useState } from "react";
import EventList from "./eventList";
import CreatedOrgs from "./createdOrganizations";
import FollowedOrgs from "./followedOrganizations";

export default function UserDashboard() {
    const [view, setView] = useState(<EventList />);
    // const [isActive, setIsActive] = useState(null)

    const handleClick = param => {
        setView(param);
    };

    return (
        <div className='container'>
            <div className='tabs is-centered'>
                <ul>
                    <li>
                        <a
                            href='#myevents'
                            onClick={() => handleClick(<EventList />)}>
                            My Events
                        </a>
                    </li>
                    <li>
                        <a
                            href='#followed'
                            onClick={() => handleClick(<FollowedOrgs />)}>
                            Followed Orgs
                        </a>
                    </li>
                    <li>
                        <a
                            href='#created'
                            onClick={() => handleClick(<CreatedOrgs />)}>
                            Created Orgs
                        </a>
                    </li>
                </ul>
            </div>
            {view}
        </div>
    );
}
