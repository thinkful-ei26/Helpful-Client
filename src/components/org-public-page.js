import React, { useState, useEffect } from 'react';
import OrgPublicPageEventList from './org-public-page-event-list';
import UserCanRateOrg from './user-can-rate-org';
// import axios from 'axios';
// import { API_BASE_URL } from '../config';
/*TODO:
1.  Render events by organization ID in OrgPublicPageEventList
2.  POST for user ratings not working yet
3.  Style select to a star system
4.  Render current rating like amz does?
5.  Refactor user-can-rate to separate component*/

import '../stylesheets/org-public-page.css';

export default function OrgPublicPage() {
  const [view, setView] = useState(<OrgPublicPageEventList />); //This renders events, (not org specific yet)

  return (
    <div className="container">
      <div className="org-public-page-main">
        <div className="org-public-header">
          <div className="org-public-logo" />
          <div className="org-public-social">
            <ul>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </div>
        </div>

        <div className="org-public-content">
          <div className="row">
            {/* <aside className="org-public-calltoaction"> */}
            <aside>
              {/* <button disabled>Follow us</button> */}
              <div className="col s12">
                <a className="waves-effect waves-light btn">follow us</a>
              </div>
                <div className="input-field col s12">
                  <select
                    // defaultValue={this.state.value}
                    // onChange={this.handleChange}
                  >
                    <option value="5">5 stars</option>
                    <option value="4">4 stars</option>
                    <option value="3">3 stars</option>
                    <option value="2">2 stars</option>
                    <option value="1">1 star</option>
                  </select>
                  <label>Rate this group</label>
                </div>
                {/* <UserCanRateOrg /> */}
            </aside>
          </div>
          <div className="org-public-text-area">
            <h1>Organization name</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="org-public-events">{view}</div>

        <div className="org-public-footer">Footer</div>
      </div>
    </div>
  );
}
