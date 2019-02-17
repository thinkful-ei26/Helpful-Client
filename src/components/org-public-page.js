import React, { useState, useEffect } from 'react';
import OrgPublicPageEventList from './org-public-page-event-list';
import axios from 'axios';
import { API_BASE_URL } from '../config';
// import OrgUserRateForm from './org-user-rate-form';
/*TODO:
1.  RENDER EVENTS BY ORGANIZATIO ID IN OrgPublicPageEventList
2.  GET POST TO WORK HERE
3.  Style select to a star system
4.  Render current rating like amz does?*/

import '../stylesheets/org-public-page.css';

export default function OrgPublicPage() {
  const [view, setView] = useState(<OrgPublicPageEventList />);//This renders events, (not org specific yet)
  const [formData, setFormData] = useState({
    rating: ''
  });
  const [success, setSuccess] = useState(false);

  const rateOrg = async () => {
    const rateOrgResult = await axios({
      method: 'post',
      url: `${API_BASE_URL}/org`,//don't have the right endpoint yet
      data: formData
    });
    setSuccess(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    rateOrg();
  };

  if (success) {
    return <p className="orgCreateSuccess">Organization created succefully!</p>;
  }
  return (
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
        <aside className="org-public-calltoaction">
          <button disabled>Follow us</button>
          <form action="submit" onSubmit={e => handleSubmit(e)}>
            <label for="rate-us">Rate us!</label>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <button
              onClick={e =>
                setFormData({ ...formData, rating: e.target.value })
              }
            >
              Submit
            </button>
          </form>
        </aside>
        <div className="org-public-text-area">
          <h1>Organization name</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>lorem ipsum</p>
        </div>
      </div>
      <div className="org-public-events">{view}</div>

      <div className="org-public-footer">Footer</div>
    </div>
  );
}
