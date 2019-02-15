
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config';

import OranizationCard from './organization-card';
import '../stylesheets/followed-orgs.css';

export default function FollowedOrgs(props) {


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
        <p>Looks like you haven't followed any organiations yet...</p>
        <p>Click here to checkout the organizations near you!</p>

        <button>Find Organizations</button>
      </section>
    )
  }

  return(
    <div>
      <section className="followedOrgsList">
        <h3>Orgnizations I Follow</h3>

        <div>

          <OranizationCard org={orgs[0]}/>

          <OranizationCard />
          <OranizationCard />
        </div>
      </section>

    </div>
    
  )
}