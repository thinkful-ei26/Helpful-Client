import React, { useEffect, useState } from "react";
import axios from "axios";
import OrganizationCard from "./organization-card";
import createOrgForm from "./create-org-form";
import { API_BASE_URL } from "../config";

import "../stylesheets/created-organizations.css";

export default function CreatedOrgs(props) {

    const [orgs, setOrgs] = useState([]);

    const fetchData = async () => {
        const request = await axios(`${API_BASE_URL}/role/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setOrgs(request.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    let orgCards;
    if (orgs) {
        orgCards = orgs.map((org, index) => {
            if (org.organizationId) {
                return (
                    <OrganizationCard
                        key={index}
                        history={props.history}
                        org={org.organizationId}
                        admin={org.role}
                    />
                );
            }
            return null;
        });
    }

    if (orgs === null || orgs.length < 1) {
        console.log(orgs === []);
        console.log(orgs);
        return (
            <section className='noFollowedOrgs'>
                <h2>My Organizations</h2>
                <p>Looks like you haven't created any organizations yet...</p>
                <p>
                    Click here to create an organization and start hosting
                    events
                </p>

                <button class='login-form-submit-button font-increase' onClick={() => props.history.push('/createorgform')}>
                    Create Organization
                </button>
            </section>
        );
    } else {
        console.log(orgs);
        return (
            <div>
                <section className='created-orgs-container'>
                    <h2>My Organizations</h2>
                    <div>{orgCards}</div>
                </section>
            </div>
        );
    }


}
