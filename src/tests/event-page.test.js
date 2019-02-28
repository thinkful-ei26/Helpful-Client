import React from 'react';
import mockAxios from '../__mocks__/axios';
import {render, fireEvent} from 'react-testing-library';
import EventPage from '../components/event-page';

describe('Footer Test', () => {
    const match = {
        params: {
            eventId: '5c751c3f996b863bf2d392c5'
        }
    }

    it('Renders loading with no state', () => {
        const {container} = render(<EventPage match={match}/>)
        const page = container.firstChild
        expect(page.textContent).toBe('Loading...')
    });

});