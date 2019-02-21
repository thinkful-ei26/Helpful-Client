import React, { useState, useEffect } from "react";
import EventList from "./event-list";
import FollowedOrgs from "./followed-organizations";
import M from "materialize-css";
import { API_BASE_URL } from "../config";
import OrganizationList from "./organization-list";

export default function UserDashboard(props) {
  const [showView, setView] = useState(<EventList />);
  const [showOrg, setShowOrg] = useState(<OrganizationList />);

  // setView((<EventList />, 'url-string')=>(component,url){ ... } );
  return (
    <div className="container">
      <div className="section">{showView}</div>
      <div className="section">{showOrg}</div>
    </div>
  );
}
