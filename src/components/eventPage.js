import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { PointMap } from "./map";
import UserComments from "./userComments";

export function EventPage(props) {
    const [event, setEvent] = useState(null);
    const [organization, setOrganization] = useState(null);
    const [rsvp, setRsvp] = useState(null);
    const [eventMap, setEventMap] = useState(null);

    let eventId = props.match.params.eventId;

    const fetchData = async () => {
        const eventResult = await axios(`${API_BASE_URL}/event/${eventId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setEvent(eventResult.data);
        setOrganization(eventResult.data.organizationId);
        const rsvpResult = await axios(
            `${API_BASE_URL}/rsvp/specific/${eventId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            }
        );
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
            <button className='button' onClick={() => createRsvp()}>
                RSVP
            </button>
        );
    } else {
        rsvpButton = (
            <button className='button' onClick={() => removeRsvp()}>
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
                    containerElement={
                        <div style={{ height: `400px`, margin: "5%" }} />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                />
            );
        }
    }

    return (
        <div className='container'>
            <div className='organization-container'>
                <h2 className='organization-name'>{organization.name}</h2>
            </div>
            {eventMap}
            <div className='event-public-container'>
                <img
                    className='event-image'
                    src={organization.imgUrl}
                    alt={organization.name}
                />
                <div className='event-header'>
                    <h1 className='event-name'>{event.name}</h1>
                </div>
                <div className='event-public-description'>
                    {event.description}
                    <div className='event-public-date'>
                        <span>When:</span> {event.date}
                    </div>
                    <div className='event-public-date'>
                        <span>Where:</span> {event.date}
                    </div>
                    <div className='event-public-date'>
                        <span>Contact:</span> {event.contact}
                    </div>
                    {rsvpButton}
                    <UserComments eventId={eventId} />
                </div>
            </div>
            <div className='organization-container'>
                <div className='organization-contact'>
                    Find out more: {organization.contact}
                </div>
            </div>
        </div>
    );
}

export default EventPage;
