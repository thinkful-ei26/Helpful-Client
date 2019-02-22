import React, { useState, useEffect } from "react";
import DashboardCreateEvent from "./dashboard-create-event";
import OrgDashboardAddUser from "./org-dashboard-add-user";
import getOrgs from "../utils/fetchOrg";
import getOrgEvents from "../utils/fetchEvent";
import OrgPublicPageEventList from "./org-public-page-event-list";
import "../stylesheets/org-dashboard-styles/org-dash-main.css";

const OrganizationDashboard = props => {
  const orgId = props.match.params.id;
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
      <article className="orgDash">
        <h2>{org.name}</h2>

        <img className="profilePic" alt="user profile pic" src={org.imgUrl} />

        <div className="org-dash-main-wrapper">
          <div className="org-main-buttons">
            <button
              className="org-main-button"
              onClick={() => setView(<OrgPublicPageEventList id={orgId} />)}
            >
              Show Scheduled Events
            </button>

            <button
              className="org-main-button"
              onClick={() => setView(<DashboardCreateEvent id={orgId} />)}
            >
              Create a new event
            </button>

            <button
              className="org-main-button"
              onClick={() => setView(<OrgDashboardAddUser />)}
            >
              Add Admin
            </button>

            <button
              disabled
              className="org-main-button"
              onClick={() => setView()}
            >
              Invite Members
            </button>
            <button
              disabled
              className="org-main-button"
              onClick={() => setView()}
            >
              Promote Event
            </button>
          </div>

          <div className="org-main-events">{view}</div>
        </div>
      </article>
    );
  }

  return <p className="loading">Loading...</p>;
};

export default OrganizationDashboard;
