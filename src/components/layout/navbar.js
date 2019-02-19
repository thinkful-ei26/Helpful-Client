import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import EventList from "../event-list";
import FollowedOrgs from "../followed-organizations";
import CreateOrgForm from "../../components/creat-org-form";
import M from "materialize-css";

const NavBar = props => {
  const [showView, setView] = useState(<EventList />);

  const logoutUser = async () => {
    await localStorage.removeItem("jwtToken");
    props.history.push("/");
  };

  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {
      draggable: true
    });
    return instances;
  }, []);
  return (
    <div className="navbar-fixed">
      <nav className="white" role="navigation">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo-container">
              <a href="/" className="">
                <img
                  className="logo hide-on-med-and-down"
                  id="logo"
                  src="/icon.png"
                  alt="helpful"
                />
              </a>
              <a href="/" className="brand-logo black-text">
                Helpful
              </a>
            </div>

            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down text-black"
            >
              <li>
                <a
                  href="#events"
                  className="waves-effect"
                  onClick={() => props.history.push("/event")}
                >
                  My Events
                </a>
              </li>

              <li>
                <a
                  className="waves-effect"
                  onClick={() => props.history.push("/createorgform")}
                >
                  Create Organization
                </a>
              </li>

              <li>
                <a
                  className="waves-effect"
                  onClick={() => props.history.push("/followedorgs")}
                >
                  Followed
                </a>
              </li>
              <li>
                <a
                  className="waves-effect"
                  onClick={() => props.history.push("/search")}
                >
                  Search Tool
                </a>
              </li>

              <li>
                <a className="waves-effect" onClick={logoutUser}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(NavBar);
