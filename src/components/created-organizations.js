import React, { useEffect, useState } from "react";
import axios from "axios";
import OrganizationCard from "./organization-card";
import createOrgForm from "./creat-org-form";
import { API_BASE_URL } from "../config";

export default function CreatedOrgs(props) {
  // PRODUCTION TODO --> currently getting all orgs, need to refactor to
  // get only user created orgs

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
        <p>Looks like you haven't created any organiations yet...</p>
        <p>Click here to create an organization and start hosting events</p>

        <button onClick={() => props.setView(createOrgForm)}>
          Create Organization
        </button>
      </section>
    );
  }

  return (
    <div>
      <section className="followedOrgsList">
        <h3>Orgnizations I Created</h3>

        <div>
          <OrganizationCard org={orgs[0]} />
          <OrganizationCard org={orgs[1]} />
          <OrganizationCard org={orgs[2]} />
        </div>
      </section>
    </div>
  );
}
