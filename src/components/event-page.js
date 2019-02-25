import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { PointMap } from "./map";
import "../stylesheets/event-page.css";

export function EventPage(props) {
    // initial state
    const [event, setEvent] = useState(null);
    const [organization, setOrganization] = useState(null);
    const [rsvp, setRsvp] = useState(null);
    const [eventMap, setEventMap] = useState(null);

    let eventId = props.match.params.eventId;

    // fetch state
    const fetchData = async () => {
        const eventResult = await axios(`${API_BASE_URL}/event/${eventId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        console.log(eventResult.data)
        setEvent(eventResult.data);
        setOrganization(eventResult.data.organizationId);
        
        // const orgResult = await axios(`${API_BASE_URL}/org/${orgId}`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: "Bearer ".concat(localStorage.getItem("jwtToken"))
        //     }
        // });
        // setOrganization(orgResult.data);

        // check if user has a reservation
        const rsvpResult = await axios(`${API_BASE_URL}/rsvp/${eventId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setRsvp(rsvpResult.data);

    };
    const createRsvp = async () => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/rsvp`,
            data: {
                eventId,
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setRsvp(true);
    };

    const removeRsvp = async () => {
        await axios({
            method: "delete",

            url: `${API_BASE_URL}/rsvp/user`,
            data: {
                eventId,
            },

            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setRsvp(false);
    };


    useEffect(() => {
        fetchData();
    }, []);


    if (event === null || organization === null) {
        return "Loading...";
    }

    let rsvpButton;
    if (!rsvp) {
        rsvpButton = (
            <button className='event-rsvp-button' onClick={() => createRsvp()}>
                RSVP
            </button>
        );
    } else {
        rsvpButton = (
            <button className='event-rsvp-button' onClick={() => removeRsvp()}>
                Cancel Reservation
            </button>
        );
    }

    if (eventMap === null) {
        if (event) {
            setEventMap(
                <PointMap
                    marker={event}
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            );
        }

    }


    return (
        <section className='event'>
            <div className='organization-container'>
                <img
                    className='event-image'
                    src={organization.imgUrl}
                    alt={organization.name}
                />
                <h2 className='organization-name'>{organization.name}</h2>
                {eventMap}
                <div className='organization-contact'>
                    {organization.contact}
                </div>
            </div>
            <div className='event-container'>
                <div className='event-header'>
                    <h1 className='event-name'>{event.name}</h1>
                    <div className='event-date'>{event.date}</div>
                </div>
                <div className='event-description'>{event.description}</div>
                <div className='event-contact'>{event.contact}</div>
                {rsvpButton}
            </div>
        </section>
    );

}

export default EventPage;
