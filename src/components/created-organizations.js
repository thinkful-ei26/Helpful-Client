import React, {useEffect, useState} from 'react';
import axios from 'axios';
import OranizationCard from './organization-card';
import createOrgForm from './creat-org-form';
import {API_BASE_URL} from '../config';

export default function CreatedOrgs(props) {

  const [orgs, setOrgs] = useState(null);

  const fetchData = async() => {
    const request = await axios(
        `${API_BASE_URL}/event/all`,
    );
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

        <button onClick={() => props.setView(createOrgForm)}>Create Organization</button>
      </section>
    )}

  return(
    <div>
      <section className="followedOrgsList">
        <h3>Orgnizations I Created</h3>

        <div>
          <OranizationCard org={orgs[0]}/>
          <OranizationCard />
          <OranizationCard />
        </div>
      </section>

      
    </div>
    
  )
}