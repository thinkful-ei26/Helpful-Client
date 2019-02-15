import React, { Component } from 'react';
import OrganizationDashboard from './components/organization-dashboard';
import UserDashboard from './components/user-dashboard';
import EventPage from './components/event-page';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        {/* <UserDashboard /> */}
        <OrganizationDashboard />

      </div>
    );
  }
}

export default App;
