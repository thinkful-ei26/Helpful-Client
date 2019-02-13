import React from 'react';
import OranizationCard from './organization-card';
import '../stylesheets/followed-orgs.css';

export default function FollowedOrgs(props) {
  return(
    <div>
      <section className="followedOrgsList">
        <h3>Orgnizations I Follow</h3>

        <div>
          <OranizationCard />
          <OranizationCard />
          <OranizationCard />
        </div>
      </section>

      <section className="noFollowedOrgs">
        <p>Looks like you haven't followed any organiations yet...</p>
        <p>Click here to checkout the organizations near you!</p>

        <button>Find Organizations</button>
      </section>
    </div>
    
  )
}