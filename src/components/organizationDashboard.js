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
            <div className='container'>
                <h2 className='org-dashboard-name'>{org.name}</h2>
                <div className='tabs is-medium is-centered'>
                    <ul>
                        <li>
                            <a
                                href='#ScheduledEvents'
                                onClick={() =>
                                    setView(
                                        <OrgPublicPageEventList id={orgId} />
                                    )
                                }>
                                Scheduled Events
                            </a>
                        </li>
                        <li>
                            <a
                                href='#createevent'
                                onClick={() =>
                                    setView(<DashboardCreateEvent id={orgId} />)
                                }>
                                Create Event
                            </a>
                        </li>
                        <li>
                            {" "}
                            <Link to={publicPageUrl}>View Public Page</Link>
                        </li>
                    </ul>
                </div>
                {view}
            </div>
        );
    }
    return <p className='loading'>Loading...</p>;
};

export default OrganizationDashboard;
