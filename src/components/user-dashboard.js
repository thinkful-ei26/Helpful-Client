import React from "react";
import EventList from "./event-list";
import OrganizationList from "./organization-list";
import RenderUserRole from "./renderuserrole";
import CreatedOrgs from "./created-organizations";
import FollowedOrgs from "./followed-organizations";

import '../stylesheets/dashboard.css';

export default function UserDashboard(props) {

    // const [showView, setView] = useState(<EventList />);
    // const [showOrg, setShowOrg] = useState(<OrganizationList />);

    // setView((<EventList />, 'url-string')=>(component,url){ ... } );
    return (
        <section className='dashboard-container'>
            <EventList />
            <div className='dashHr'></div>
            <FollowedOrgs />
            <div className='dashHr'></div>
            <CreatedOrgs />
            {/* <OrganizationList /> */}
            {/* <RenderUserRole />  --> for extension */}
        </section>
    );

}
