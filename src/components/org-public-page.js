import React from 'react';
import '../stylesheets/org-public-page.css';

export default function OrgPublicPage() {
  return (
    <div className="org-public-page-main">
      <div className="org-public-header">
        <div className="org-public-logo">
          <img src="https://lorempixel.com/g/100/100" alt="" />
        </div>
        <div className="org-public-social">
          <ul>
            <li>social 1</li>
            <li>social 2</li>
            <li>social 3</li>
            <li>social 4</li>
          </ul>
        </div>
      </div>
      <div className="org-public-calltoaction">
        <button>Follow us</button>
        <button disabled>Button 2</button>
        <button disabled>Button 3</button>
      </div>

      <div className="org-public-content">
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

      <div className="org-public-footer">Footer</div>
    </div>
  );
}