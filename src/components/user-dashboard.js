import React, { useState } from "react";
import EventList from "./event-list";
import FollowedOrgs from "./followed-organizations";
import CreatedOrgs from "./created-organizations";
import CreateOrgForm from "./creat-org-form";
import Search from "./search";
import "../stylesheets/user-dashboard.css";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default function UserDashboard(props) {
  const [showView, setView] = useState(<EventList />);
  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
  });

  // setView((<EventList />, 'url-string')=>(component,url){ ... } );
  return (
    <div className="dashboard center container">
      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="http://lorempixel.com/300/300" alt="user background" />
            </div>
            <a href="#user">
              <img
                class="circle"
                src="http://lorempixel.com/150/150"
                alt="user profile"
              />
            </a>
            <a href="#name">
              <span class="white-text name">Johnny User</span>
            </a>
            <a href="#email">
              <span class="white-text email">johnnyquest@test.com</span>
            </a>
          </div>
        </li>

        <li>
          <a
            href="events"
            class="waves-effect"
            onClick={() => setView(<EventList />)}
          >
            <i class="material-icons">assignment</i>My Events
          </a>
        </li>
        <li>
          <div class="divider" />
        </li>
        <li>
          <a class="waves-effect" onClick={() => setView(<CreateOrgForm />)}>
            <i class="material-icons">create</i>Create Organization
          </a>
        </li>
        <li>
          <div class="divider" />
        </li>
        <li>
          <a class="waves-effect" onClick={() => setView(<FollowedOrgs />)}>
            <i class="material-icons">subscriptions</i>Followed Organizations
          </a>
        </li>
        <li>
          <div class="divider" />
        </li>
        <li>
          <a class="waves-effect" onClick={() => props.history.push("/search")}>
            <i class="material-icons">search</i>Search Tool
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">
        {/* <i class="material-icons">menu</i> */}
        you really shouldnt click me
      </a>
      <div className="container center">{showView}</div>
    </div>
  );
}
