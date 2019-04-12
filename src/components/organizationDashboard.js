import React, { useState, useEffect } from "react";
import DashboardCreateEvent from "./dashboardCreateEvent";
import getOrgs from "../utils/fetchOrg";
import getOrgEvents from "../utils/fetchEvent";
import OrgPublicPageEventList from "./orgPublicPageEventList";
import { Link } from "react-router-dom";

const OrganizationDashboard = props => {
    const orgId = props.match.params.id;
    const publicPageUrl = `/organization/${orgId}`;
    const [view, setView] = useState(<OrgPublicPageEventList id={orgId} />);
    const [org, setOrgs] = useState(null);
    const [events, setEvents] = useState(null);

    const fetchData = props => {
        getOrgs(orgId).then(res => setOrgs(res.data));
        getOrgEvents(orgId).then(res => setEvents(res.data));
    };

    useEffect(() => {
        fetchData();
    }, [props.match.params.id]);

    if (org && events) {
        return (
            <article className='orgDash'>
                <div className='orgdash-col-1'>
                    <h2 className='org-dashboard-name'>{org.name}</h2>
                    <img
                        className='profilePic'
                        alt='user profile pic'
                        src={org.imgUrl}
                    />
                    <div className='org-main-buttons'>
                        <button
                            className='org-main-button'
                            onClick={() =>
                                setView(<OrgPublicPageEventList id={orgId} />)
                            }>
                            Show Scheduled Events
                        </button>
                        <button
                            className='org-main-button'
                            onClick={() =>
                                setView(<DashboardCreateEvent id={orgId} />)
                            }>
                            Create a new event
                        </button>
                    </div>
                    <Link to={publicPageUrl}>
                        <button className='org-main-button'>
                            View your public page
                        </button>
                    </Link>
                </div>
                <div className='org-main-events'>{view}</div>
            </article>
        );
    }
    return <p className='loading'>Loading...</p>;
};

export default OrganizationDashboard;
