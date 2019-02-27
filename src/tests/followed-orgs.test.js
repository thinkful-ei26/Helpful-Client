// import React from 'react';
// import { shallow } from '../enzyme';
// import React from 'react'
// import {
//   render,
//   fireEvent,
//   cleanup,
//   waitForElement,
// } from 'react-testing-library'
// import 'jest-dom/extend-expect'
// import axiosMock from 'axios'

// import FollowedOrgs from '../components/followed-organizations';

// afterEach(cleanup)


// describe('FollowedOrgs Test', () => {

//   it('renders', () => {
//     const wrapper = shallow(<FollowedOrgs />);
//     expect(wrapper.find('.title')).toBeDefined();
//     expect(wrapper.find('.container')).toBeDefined();
//     expect(wrapper.find('.noFollowedOrgs')).toBeDefined();
//   });

// });

// const dummyProps = { name: 'Name', }
// const card = shallow(<EventCard {...dummyProps} />); 
// it('should contain a name', () => { 
//   expect(card.find('.name')).toEqual('name'); });

// expect( card.containsMatchingElement( 
//   <div className="card-action">
//     <span>3/11/19</span> 
//     <span>at Valley Church</span> 
//     <span>Mr G</span> </div> ) ).toBeTruthy()