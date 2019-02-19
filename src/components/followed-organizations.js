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
    const request = await axios(`${API_BASE_URL}/org/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    });
    setOrgs(request.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <h3>Organizations I Follow</h3>
        <div className="row">
          <OrganizationCard org={orgs[0]} />
          <OrganizationCard org={orgs[1]} />
          <OrganizationCard org={orgs[2]} />
        </div>
      </div>
    </React.Fragment>
  );
}
