import LandingPage from "./layout/landing";
import Register from "./auth/register";
import Login from "./auth/login";
import UserDashboard from "./userDashboard";
import Search from "./search";
import OrgPublicPage from "./orgPublicPage";
import EventPage from "./eventPage";
import CreateOrgForm from "./createOrgForm";
import FollowedOrgs from "./followedOrganizations";
import ErrorPage from "./layout/errorPage";
import CreatedOrgs from "./createdOrganizations";
import OrganizationDashboard from "./organizationDashboard";
import EventList from "./eventList";

const routes = [
    {
        title: "LandingPage",
        path: "/",
        exact: true,
        component: LandingPage,
    },
    {
        title: "CreateOrgForm",
        path: "/createorgform",
        exact: true,
        component: CreateOrgForm,
    },
    {
        title: "FollowedOrgs",
        path: "/followedorgs",
        exact: true,
        component: FollowedOrgs,
    },
    {
        title: "Register",
        path: "/register",
        exact: true,
        component: Register,
    },
    {
        title: "Login",
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        title: "UserDashboard",
        path: "/dashboard",
        exact: true,
        component: UserDashboard,
    },
    {
        title: "Search",
        path: "/search",
        exact: true,
        component: Search,
    },
    {
        title: "EventPage",
        path: "/event/:eventId",
        exact: true,
        component: EventPage,
    },
    {
        title: "OrgPublicPage",
        path: "/organization/:id",
        exact: true,
        component: OrgPublicPage,
    },
    {
        title: "CreatedOrgs",
        path: "/createdorgs",
        exact: true,
        component: CreatedOrgs,
    },
    {
        title: "OrganizationDashboard",
        path: "/orgdashboard/:id",
        exact: true,
        component: OrganizationDashboard,
    },
    {
        title: "EventList",
        path: "/events",
        exact: true,
        component: EventList,
    },
    {
        title: "ErrorPage",
        path: "/",
        component: ErrorPage,
    },
];

export default routes;
