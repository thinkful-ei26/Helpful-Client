import React from 'react';
import OranizationCard from './organization-card';
import createOrgForm from './creat-org-form';

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

        <button onClick={() => props.setView(createOrgForm)}>Create Organization</button>
      </section>
    </div>
    
  )
}