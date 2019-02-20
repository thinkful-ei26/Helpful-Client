import React, { useState, useEffect } from "react";
import OrgPublicPageEventList from "./org-public-page-event-list";
import UserCanRateOrg from "./user-can-rate-org";
import "../stylesheets/org-public-page.css";
import M from "materialize-css";
import axios from "axios";
import { API_BASE_URL } from "../config";
import getOrgs from "../utils/fetchOrg";

const OrgPublicPage = function(props) {
  const [view, setView] = useState(<OrgPublicPageEventList />);
  const [orgs, setOrgs] = useState(null);

  const fetchData = props => {
    getOrgs(props.match.params.id).then(res => setOrgs(res.data));
  };

  useEffect(() => fetchData(props), [props.match.params.id]);

  console.log("LOOK AT ME", props.match.params.id);

  if (orgs) {
    return (
      <div className="org-public-page-main center container valign-wrapper">
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large teal lighten-2">
            <i className="large material-icons">add</i>
          </a>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="material-icons">comment</i>
              </a>
            </li>
            <li>
              <a className="btn-floating pink darken-4">
                <i className="material-icons">share</i>
              </a>
            </li>
            <li>
              <a className="btn-floating purple darken-2">
                <i className="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a className="btn-floating light-blue darken-3">
                <i className="material-icons">notifications</i>
              </a>
            </li>
          </ul>
        </div>

        <div className="org-public-content container">
          <div className="org-public-text-area">
            <span className="header">{orgs.name}</span>
            <img
              alt="Organization Logo"
              className="responsive-img"
              src={orgs.imgUrl}
            />
            {/* <UserCanRateOrg /> */}
            <p className="flow-text">{orgs.description}</p>
            <p className="flow-text">{orgs.location}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>I am loading text</p>
    </div>
  );
};

export default OrgPublicPage;
