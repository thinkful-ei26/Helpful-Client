import React, { useState } from "react";
import OrgPublicPageEventList from "./org-public-page-event-list";
import "../stylesheets/org-public-page.css";
import M from "materialize-css";

export default function OrgPublicPage() {
  const [view] = useState(<OrgPublicPageEventList />);
  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".fixed-action-btn");
    let instances = M.FloatingActionButton.init(elems, {
      direction: "left",
      // toolbarEnabled: true
      hoverEnabled: true
    });
  });
  return (
    <div className="org-public-page-main center container valign-wrapper">
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large teal lighten-2">
          <i class="large material-icons">add</i>
        </a>
        <ul>
          <li>
            <a class="btn-floating red">
              <i class="material-icons">comment</i>
            </a>
          </li>
          <li>
            <a class="btn-floating pink darken-4">
              <i class="material-icons">share</i>
            </a>
          </li>
          <li>
            <a class="btn-floating purple darken-2">
              <i class="material-icons">publish</i>
            </a>
          </li>
          <li>
            <a class="btn-floating light-blue darken-3">
              <i class="material-icons">notifications</i>
            </a>
          </li>
        </ul>
      </div>

      <div className="org-public-content container">
        <div className="org-public-text-area">
          <h1>Organization Name</h1>
          <img
            alt="Organization Logo"
            className="responsive-img"
            src="http://lorempixel.com/200/200/"
          />
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
        <div className="org-public-events">{view}</div>
      </div>
    </div>
  );
}
