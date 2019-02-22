import React, { useState, useEffect } from "react";
import axios from "axios";
import OrganizationCard from "./organization-card";
import { API_BASE_URL } from "../config";

const OrganizationList = () => {
  const [organizations, setOrganizations] = useState(null);
  // const [followedOrgs, setFollowedOrgs] = useState(null);

  //TODO: Get all followed orgs

  // get all organization filtered by proximity

  const fetchOrgData = async () => {
    await axios(`${API_BASE_URL}/org/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
      }
    }).then(res => {
      if (res.data) {
        setOrganizations(res.data);
      }
    });
  };

  useEffect(() => {
    fetchOrgData();
  }, []);
  let organizationList;
  if (organizations) {
    organizationList = organizations.map((org, index) => {
      return <OrganizationCard key={index} org={org} />;
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col 12">
          <div className="section">
            <div className="col s12">
              <span className="title">Organizations</span>
            </div>
          </div>
          <div className="col s12 m6 l4">{organizationList}</div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationList;
