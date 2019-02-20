import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_BASE_URL } from '../config';
import OrgPublicPageEventList from "./org-public-page-event-list";
import UserCanRateOrg from "./user-can-rate-org";
import "../stylesheets/org-public-page.css";
import M from "materialize-css";

export default function OrgPublicPage(props) {
  const [view] = useState(<OrgPublicPageEventList />);
  const [following, setFollowing] = useState(false);

  // org data object lives in props.location.state.org
  // console.log('org data: ', props.location.state.org)

  // follow an organization
  const orgId =  props.location.state.org.id;
  const followOrg = async() => {
    await axios({
      method: 'post',
      url: `${API_BASE_URL}/follow`,
      data: {orgId,},
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
      }
    })
    setFollowing(true);
  }

  useEffect(() => {
    let elems = document.querySelectorAll(".fixed-action-btn");
    let instances = M.FloatingActionButton.init(elems, {
      direction: "left",
      // toolbarEnabled: true
      hoverEnabled: true
    });
    return instances;
  }, []);


  // document.addEventListener('DOMContentLoaded', function() {
  //   let elems = document.querySelectorAll('.fixed-action-btn');
  //   let instances = M.FloatingActionButton.init(elems, {
  //     direction: 'left',
  //     // toolbarEnabled: true
  //     hoverEnabled: true
  //   });
  // });
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
          <h1>Organization Name</h1>
          <img alt="Organization Logo" className="responsive-img" src="http://lorempixel.com/200/200/" />

          <button className="follow-button"
            onClick={() => followOrg()}
          >
            Follow
          </button>

          <UserCanRateOrg />
          <p className="flow-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="flow-text">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="org-public-events">{view}</div>
      </div>
    </div>
  );
}
