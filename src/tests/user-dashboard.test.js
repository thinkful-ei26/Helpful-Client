import React from 'react';
import { shallow } from '../enzyme';

import UserDashboard from '../components/user-dashboard';
import EventList from "../components/event-list";
import CreatedOrgs from "../components/created-organizations";
import FollowedOrgs from "../components/followed-organizations";

describe('User Dashboard Test', () => {

  it('renders', () => {
    const wrapper = shallow(<UserDashboard />);
    expect(wrapper.find('.container')).toBeDefined();
    expect(wrapper.find(EventList)).toBeDefined();
    expect(wrapper.find(CreatedOrgs)).toBeDefined();
    expect(wrapper.find(FollowedOrgs)).toBeDefined();
  });
});