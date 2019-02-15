import React, { Component } from 'react';

import OrganizationDashboard from './components/organization-dashboard';
// import OrgPublicPage from './components/org-public-page'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrganizationDashboard />
        {/* <OrgPublicPage/> */}
      </div>
    );
  }
}

export default App;
