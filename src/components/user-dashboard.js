import React from "react";
import EventList from "./event-list";
import OrganizationList from "./organization-list";
import RenderUserRole from "./renderuserrole";
import CreatedOrgs from "./created-organizations";
import FollowedOrgs from "./followed-organizations";

export default function UserDashboard(props) {

    // const [showView, setView] = useState(<EventList />);
    // const [showOrg, setShowOrg] = useState(<OrganizationList />);

    // setView((<EventList />, 'url-string')=>(component,url){ ... } );
    return (
        <div className='container'>
            <EventList />
            <CreatedOrgs />
            <FollowedOrgs />
            {/* <OrganizationList /> */}
            {/* <RenderUserRole />  --> for extension */} 
        </div>
    );

}
