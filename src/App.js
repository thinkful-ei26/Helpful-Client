import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/navbar';
import LandingPage from './components/layout/landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import OrgPublicPage from './components/org-public-page';
import UserCanRateOrg from './components/user-can-rate-org';
import CreateOrgForm from './components/creat-org-form';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <OrgPublicPage/> */}
        <UserCanRateOrg />
        {/* <CreateOrgForm /> */}
        {/* <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} /> */}
      </div>
    </Router>
  );
};

export default App;
