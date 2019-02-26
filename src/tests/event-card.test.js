import React from 'react';
import { shallow } from '../enzyme';

import EventCard from '../components/eventcard';

let event = { 
    id: '5c751c3f996b863bf2d392c5',
    name:'Planning Meeting',
    description:'lets plan things',
    location:'at Valley Church',
    date:'3/11/19',
    contact:'Mr G',
}

describe('Event card renders with props', () => {
    const card = shallow(<EventCard event={event}/>);

    it('should contain a title', () => {
        expect(
            card.containsMatchingElement(
                <span className="card-title">Planning Meeting</span>
            )
        ).toBeTruthy()
    });

    it('should contain a description', () => {
        expect(
            card.containsMatchingElement(
                <p>lets plan things</p>
            )
        ).toBeTruthy()
    });

    it('should contain info', () => {
        expect(
            card.containsMatchingElement(
                <div className="card-action">
                    <span>3/11/19</span>
                    <span>at Valley Church</span>
                    <span>Mr G</span>
                </div>
            )
        ).toBeTruthy()
    });
});


