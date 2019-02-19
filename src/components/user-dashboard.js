import React, { useState, useEffect } from "react";
import EventList from "./event-list";
import FollowedOrgs from "./followed-organizations";
import CreateOrgForm from "./creat-org-form";
import M from "materialize-css";
import { API_BASE_URL } from "../config";

export default function UserDashboard(props) {
  const [showView, setView] = useState(<EventList />);

  // setView((<EventList />, 'url-string')=>(component,url){ ... } );
  return (
    <div className="container">
      <div className="section">{showView}</div>
    </div>
  );
}
