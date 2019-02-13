import React from 'react';
import OranizationCard from './organization-card';

export default function CreatedOrgs(props) {
  return(
    <div>
      <section className="followedOrgsList">
        <h3>Orgnizations I Created</h3>

        <div>
          <OranizationCard />
          <OranizationCard />
          <OranizationCard />
        </div>
      </section>

      <section className="noFollowedOrgs">
        <p>Looks like you haven't created any organiations yet...</p>
        <p>Click here to create an organization and start hosting events</p>

        <button>Create Organization</button>
      </section>
    </div>
    
  )
}