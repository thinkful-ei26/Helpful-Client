import React from 'react';
import { shallow } from '../enzyme';

import EventList from '../components/event-list';

describe('EventList Test', () => {

  it('renders', () => {
    const wrapper = shallow(<EventList />);
    expect(wrapper.find('.title')).toBeDefined();
    expect(wrapper.find('.eventsContainer')).toBeDefined();
  });

});