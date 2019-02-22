import React from "react";
import EventList from "./event-list";
import OrganizationList from "./organization-list";
import RenderUserRole from "./renderuserrole";

export default function UserDashboard(props) {

    // const [showView, setView] = useState(<EventList />);
    // const [showOrg, setShowOrg] = useState(<OrganizationList />);

    // setView((<EventList />, 'url-string')=>(component,url){ ... } );
    return (
        <div className='container'>
            <EventList />
            <OrganizationList />
            <RenderUserRole />
        </div>
    );

}
