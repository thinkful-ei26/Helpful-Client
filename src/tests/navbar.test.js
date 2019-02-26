import React from 'react';
import { shallow } from '../enzyme';

import Navbar from '../components/layout/navbar';

describe('Navbar Test', () => {

  it('renders', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar-fixed')).toBeDefined();
  });

});