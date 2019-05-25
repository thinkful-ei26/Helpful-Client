import React, { useState } from "react";
import EventList from "./eventList";
import CreatedOrgs from "./createdOrganizations";
import FollowedOrgs from "./followedOrganizations";

export default function UserDashboard() {
    const [view, setView] = useState(<EventList />);
    const [isActive, setIsActive] = useState("EventList");

    const handleActive = (renderedComponent, viewState) => {
        setIsActive(renderedComponent);
        setView(viewState);
    };

    return (
        <div className='container'>
            <div className='tabs is-centered'>
                <ul>
                    <li className={isActive === "EventList" ? "is-active" : ""}>
                        <a
                            href='#myevents'
                            onClick={() =>
                                handleActive("EventList", <EventList />)
                            }>
                            My Events
                        </a>
                    </li>

                    <li
                        className={
                            isActive === "FollowedOrgs" ? "is-active" : ""
                        }>
                        <a
                            href='#followed'
                            onClick={() =>
                                handleActive("FollowedOrgs", <FollowedOrgs />)
                            }>
                            Followed Orgs
                        </a>
                    </li>

                    <li
                        className={
                            isActive === "CreatedOrgs" ? "is-active" : ""
                        }>
                        <a
                            href='#created'
                            onClick={() =>
                                handleActive("CreatedOrgs", <CreatedOrgs />)
                            }>
                            Created Orgs
                        </a>
                    </li>
                </ul>
            </div>
            {view}
        </div>
    );
}
