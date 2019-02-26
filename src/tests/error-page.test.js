import React from 'react';
import { shallow } from '../enzyme';

import ErrorPage from '../components/layout/errorPage';

describe('Error Page Test', () => {

  it('renders', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper.find('.error-container')).toBeDefined();
    expect(wrapper.find('.error-message')).toBeDefined();
  });

});