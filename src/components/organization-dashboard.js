import React from 'react';
import EventCard from './eventcard';
import OrgDashboardEventButtons from '../components/orgdashboardeventbuttons';
import '../stylesheets/org-dashboard-styles/organization-dashboard.css';

export default class OrganizationDashboard extends React.Component {
 state= {
   eventname: '',
   description:'',
   location:'',
   date:'',
   contact:''
 }

 
 
 
 
 render(){
  return (
    <div className="main-dashboard">
      <div className="org-blob">ORG BLOB</div>
      <div className="dashboard-content">
        <OrgDashboardEventButtons />
        <EventCard />
      </div>
    </div>
  );
}
};

