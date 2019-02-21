import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/navbar";
import LandingPage from "./components/layout/landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import UserDashboard from "./components/user-dashboard";
import Search from "./components/search";
import OrgPublicPage from "./components/org-public-page";
import EventPage from "./components/event-page";
import Footer from "./components/layout/footer";
import CreateOrgForm from "./components/creat-org-form";
import FollowedOrgs from "./components/followed-organizations";
import CreateMeetup from "./components/create-meetup";
import OrganizationList from "./components/organization-list";
import ErrorPage from "./components/layout/errorPage";
import CreatedOrgs from "./components/created-organizations";
import OrganizationDashboard from "./components/organization-dashboard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create-meetup" component={CreateMeetup} />
          <Route exact path="/createorgform" component={CreateOrgForm} />
          <Route exact path="/followedorgs" component={FollowedOrgs} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/createdorgs" component={CreatedOrgs} />
          <Route exact path="/orgdashboard/:id" component={OrganizationDashboard} />
          {/* <Route exact path="/organization" component={OrgPublicPage} /> */}
          <Route exact path="/event" component={EventPage} />
          <Route exact path="/organization/:id" component={OrgPublicPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
