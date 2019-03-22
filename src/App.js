import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/navBar";
// import LandingPage from "./components/layout/landing";
// import Register from "./components/auth/register";
// import Login from "./components/auth/login";
// import UserDashboard from "./components/userDashboard";
// import Search from "./components/search";
// import OrgPublicPage from "./components/orgPublicPage";
// import EventPage from "./components/eventPage";
import Footer from "./components/layout/footer";
// import CreateOrgForm from "./components/createOrgForm";
// import FollowedOrgs from "./components/followedOrganizations";
// import ErrorPage from "./components/layout/errorPage";
// import CreatedOrgs from "./components/createdOrganizations";
// import OrganizationDashboard from "./components/organizationDashboard";
// import EventList from "./components/eventList";
import "./App.css";
import routes from "./components/routes";
import LoadingRoute from "./components/loadingRoute";

const App = () => {
    return (
        <div className='App App-min-height'>
            <NavBar />
            <Switch>
                {routes.map((route, i) => (
                    <LoadingRoute key={i} {...route} />
                ))}
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
