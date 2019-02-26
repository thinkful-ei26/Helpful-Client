import React from 'react';
import { shallow } from '../enzyme';

import Landing from '../components/layout/landing';

describe('Landing Test', () => {

  it('renders', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find('.container')).toBeDefined();
    expect(wrapper.find('.flow-text')).toBeDefined();
    expect(wrapper.find('.container')).toBeDefined();
  });

});