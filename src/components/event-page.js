import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config';

import '../stylesheets/event-page.css';

export function EventPage(props) {

    // initial state
    const [event, setEvent] = useState(null);
    const [organization, setOrganization] =  useState(null);
    const [rsvp, setRsvp] =  useState(null);

    // placeholder id ************* These get changed out with props ************************
    let eventId = '5c636a0ecdf4a255043e528f';
    let orgId = '5c636994cdf4a255043e528e';
    let userId = '5c63687ccdf4a255043e528d';

    // fetch state
    const fetchData = async() => {
        const eventResult = await axios(
            `${API_BASE_URL}/event/${eventId}`,
        );
        setEvent(eventResult.data);

        const orgResult = await axios(
            `${API_BASE_URL}/org/${orgId}`,
        );
        setOrganization(orgResult.data);

        // check if user has a reservation
        const rsvpResult = await axios(
            `${API_BASE_URL}/rsvp/${userId}/${eventId}`,
        );
        setRsvp(rsvpResult.data)
    }

    const createRsvp = async() => {
        await axios({
            method: 'post',
            url: `${API_BASE_URL}/rsvp`,
            data: {
                userId,
                eventId
            }
        });
        setRsvp(true);
    }

    const removeRsvp = async() => {
        await axios({
            method: 'delete',
            url: `${API_BASE_URL}/rsvp/user`,
            data: {
                userId,
                eventId
            }
        });
        setRsvp(false);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    if (event === null || organization === null) {
    return 'Loading...';
    }

    let rsvpButton;
    if(!rsvp) {
        rsvpButton = <button className="event-rsvp-button" onClick={() => createRsvp()}>RSVP</button>
    } else {
        rsvpButton = <button className="event-rsvp-button" onClick={() => removeRsvp()}>Cancel Reservation</button>
    }

    return (
        <section className='event'>
            <div className="organization-container">
                <img className="event-image" src={organization.imgUrl} alt={organization.name} />
                <h2 className="organization-name">{organization.name}</h2>
                <div className="organization-contact">{organization.contact}</div>
            </div>
            <div className="event-container">
                <div className="event-header">
                    <h1 className="event-name">{event.name}</h1>
                    <div className="event-date">{event.date}</div>
                </div>
                <div className="event-description">{event.description}</div>                
                <div className="event-contact">{event.contact}</div>
                {rsvpButton}
            </div>
        </section>
    );
}

export default EventPage;