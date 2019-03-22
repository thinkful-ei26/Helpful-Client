import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/navBar";
import LandingPage from "./components/layout/landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import UserDashboard from "./components/userDashboard";
import Search from "./components/search";
import OrgPublicPage from "./components/orgPublicPage";
import EventPage from "./components/eventPage";
import Footer from "./components/layout/footer";
import CreateOrgForm from "./components/createOrgForm";
import FollowedOrgs from "./components/followedOrganizations";
import ErrorPage from "./components/layout/errorPage";
import CreatedOrgs from "./components/createdOrganizations";
import OrganizationDashboard from "./components/organizationDashboard";
import EventList from "./components/eventList";
import "./App.css";

const App = () => {
    return (
        <div className='App App-min-height'>
            <NavBar />
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/createorgform' component={CreateOrgForm} />
                <Route exact path='/followedorgs' component={FollowedOrgs} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={UserDashboard} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/event/:eventId' component={EventPage} />
                <Route
                    exact
                    path='/organization/:id'
                    component={OrgPublicPage}
                />
                <Route exact path='/createdorgs' component={CreatedOrgs} />
                <Route
                    exact
                    path='/orgdashboard/:id'
                    component={OrganizationDashboard}
                />
                <Route exact path='/events' component={EventList} />
                <Route component={ErrorPage} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
