import React from "react";
import { shallow } from "../enzyme";

import UserDashboard from "../components/userDashboard";
import EventList from "../components/eventList";
import CreatedOrgs from "../components/createdOrganizations";
import FollowedOrgs from "../components/followedOrganizations";

describe("User Dashboard Test", () => {
    it("renders", () => {
        const wrapper = shallow(<UserDashboard />);
        expect(wrapper.find(".container")).toBeDefined();
        expect(wrapper.find(EventList)).toBeDefined();
        expect(wrapper.find(CreatedOrgs)).toBeDefined();
        expect(wrapper.find(FollowedOrgs)).toBeDefined();
    });
});
