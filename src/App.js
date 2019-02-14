import React, { Component } from 'react';
<<<<<<< HEAD
import OrganizationDashboard from './components/organization-dashboard';
import UserDashboard from './components/user-dashboard';
=======

import EventPage from './components/event-page';
import OrgPublicPage from './components/org-public-page'

>>>>>>> component/org-public-page
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header" />
        {/* <UserDashboard /> */}
        <OrganizationDashboard/>
=======
        {/* <EventPage /> */}
        <OrgPublicPage/>
>>>>>>> component/org-public-page
      </div>
    );
  }
}

export default App;
