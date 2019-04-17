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
                    {isActive === "EventList" ? (
                        <li className='is-active'>
                            <a
                                href='#myevents'
                                onClick={() =>
                                    handleActive("EventList", <EventList />)
                                }>
                                My Events
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a
                                href='#myevents'
                                onClick={() =>
                                    handleActive("EventList", <EventList />)
                                }>
                                {" "}
                                My Events
                            </a>
                        </li>
                    )}

                    {isActive === "FollowedOrgs" ? (
                        <li className='is-active'>
                            <a
                                href='#followed'
                                onClick={() =>
                                    handleActive(
                                        "FollowedOrgs",
                                        <FollowedOrgs />
                                    )
                                }>
                                Followed Orgs
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a
                                href='#followed'
                                onClick={() =>
                                    handleActive(
                                        "FollowedOrgs",
                                        <FollowedOrgs />
                                    )
                                }>
                                {" "}
                                Followed Orgs
                            </a>
                        </li>
                    )}

                    {isActive === "CreatedOrgs" ? (
                        <li className='is-active'>
                            <a
                                href='#created'
                                onClick={() =>
                                    handleActive("CreatedOrgs", <CreatedOrgs />)
                                }>
                                Created Orgs
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a
                                href='#created'
                                onClick={() =>
                                    handleActive("CreatedOrgs", <CreatedOrgs />)
                                }>
                                {" "}
                                Created Orgs
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            {view}
        </div>
    );
}
