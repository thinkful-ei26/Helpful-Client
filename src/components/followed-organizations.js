import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

import OrganizationCard from "./organization-card";
import "../stylesheets/followed-orgs.css";

export default function FollowedOrgs(props) {
  // PRODUCTION TODO --> currently getting all orgs, need to refactor to
  // get only user followed orgs

  const [orgs, setOrgs] = useState(null);

  const fetchData = async () => {
    const request = await axios(`${API_BASE_URL}/follow/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    });
    console.log(request.data)
    setOrgs(request.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let followedOrgCards;
  if (orgs) {
    followedOrgCards = orgs.map(org => {
      if (org.organizationId) {
        return <OrganizationCard history={props.history} org={org.organizationId}/>
      }
      return null;
    })
  }
  

  if (orgs === null) {
    return (
      <section className="noFollowedOrgs">
        <p>Looks like you haven't followed any organizations yet...</p>
        <p>Click here to checkout the organizations near you!</p>

        <button>Find Organizations</button>
      </section>
    );
  }

  return (
    <React.Fragment>
      <div className="container">
        <span className="title">Organizations I Follow</span>
      </div>
      <div className="row">
        {followedOrgCards}
      </div>
    </React.Fragment>
  );
}
