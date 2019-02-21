import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import OrganizationList from "./components/organization-list";
import RenderJsonToCsv from "./components/scratch";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <OrganizationList /> */}

        <Route exact path="/createorgform" component={CreateOrgForm} />
        <Route exact path="/followedorgs" component={FollowedOrgs} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={UserDashboard} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/organization" component={OrgPublicPage} /> */}
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/organization/:id" component={OrgPublicPage} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
