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
import CreateOrgForm from "./components/create-org-form";
import FollowedOrgs from "./components/followed-organizations";
import ErrorPage from "./components/layout/errorPage";
// import CreateMeetup from "./components/create-meetup";
import CreatedOrgs from "./components/created-organizations";
import OrganizationDashboard from "./components/organization-dashboard";
import EventList from "./components/event-list";
// import MeetupPage from "./components/meetup-page";
import './App.css'

const App = () => {
    return (
        <Router>
            <div className='App'>
                <NavBar />
                <div className='App-inner-container'>
                {/* <OrganizationList /> */}
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route
                        exact
                        path='/createorgform'
                        component={CreateOrgForm}
                    />
                    <Route
                        exact
                        path='/followedorgs'
                        component={FollowedOrgs}
                    />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/dashboard' component={UserDashboard} />
                    <Route exact path='/search' component={Search} />
                    {/* <Route exact path="/organization" component={OrgPublicPage} /> */}
                    <Route exact path='/event/:eventId' component={EventPage} />
                    {/* <Route
                        exact
                        path='/meetup/:eventId'
                        component={MeetupPage}
                    /> */}
                    {/* <Route
                        exact
                        path='/create-meetup'
                        component={CreateMeetup}
                    /> */}
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
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
