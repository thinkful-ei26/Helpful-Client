import React, { Component } from 'react';



// import OrgPublicPage from './components/org-public-page'

import OrganizationDashboard from './components/organization-dashboard';
import UserDashboard from './components/user-dashboard';
import EventPage from './components/event-page';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        
        {/* <OrgPublicPage/> */}

        <header className="App-header" />
        <UserDashboard />
        {/* <OrganizationDashboard/> */}


      </div>
    );
  }
}

export default App;
