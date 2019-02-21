import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import OrgPublicPageEventList from "./org-public-page-event-list";
import UserCanRateOrg from "./user-can-rate-org";
import "../stylesheets/org-public-page.css";
import getOrgs from "../utils/fetchOrg";
import getOrgEvents from "../utils/fetchEvent";

export default function OrgPublicPage(props) {
  // const [view, setView] = useState(<OrgPublicPageEventList />);
  const [following, setFollowing] = useState(false);
  const [followData, setFollowdata] = useState(null);
  const [orgs, setOrgs] = useState(null);
  const [orgEvents, setOrgEvents] = useState(null);

  const orgId = props.match.params.id;

  const fetchData = props => {
    getOrgs(orgId).then(res => setOrgs(res.data));
  };
  const fetchEvents = () => {
    getOrgEvents(orgId).then(res => setOrgEvents(res.data));
  };
  let followButton;

  // check to see if user is following this org or not, and call generateFollowButton()
  const fetchFollow = async () => {
    const request = await axios(`${API_BASE_URL}/follow/following/${orgId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    }).then(res => {
      if (res.data.following) {
        setFollowing(true);
        setFollowdata(res.data);
      }
      generateFollowButton();
    });
  };

  // follow an organization
  const followOrg = async () => {
    await axios({
      method: "post",
      url: `${API_BASE_URL}/follow`,
      data: { orgId },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    }).then(res => {
      if (res.status === 200) {
        setFollowing(true);
        setFollowdata(res.data);
      }
    });
  };

  const unFollowOrg = async () => {
    await axios({
      method: "delete",
      url: `${API_BASE_URL}/follow`,
      data: {
        followId: followData.id
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    }).then(res => {
      if (res.status === 200) {
        setFollowing(false);
      }
    });
  };
  const generateFollowButton = () => {
    if (!following) {
      followButton = (
        <button className="follow-button" onClick={() => followOrg()}>
          Follow
        </button>
      );
    } else {
      followButton = (
        <button className="unfollow-button" onClick={() => unFollowOrg()}>
          Unfollow
        </button>
      );
    }
  };

  // useEffect(() => {
  //   fetchFollow();
  //   let elems = document.querySelectorAll(".fixed-action-btn");
  //   let instances = M.FloatingActionButton.init(elems, {
  //     direction: "left",
  //     // toolbarEnabled: true
  //     hoverEnabled: true
  //   });
  //   return instances;
  // }, []);

  useEffect(() => {
    fetchFollow();
    fetchData(props);
    fetchEvents();
  }, [props.match.params.id]);

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
            {followButton}
            <UserCanRateOrg />
            <p className="flow-text">{orgs.description}</p>
            <p className="flow-text">{orgs.location}</p>
          </div>
          <div className="container">
            <p>Hey{orgEvents}</p>
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
}
