import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./eventCard";
import { API_BASE_URL } from "../config";

export default function EventList() {
    const [events, setEvents] = useState(null);
    const [rsvpEvents, setRsvpEvents] = useState(null);
    const [location, setLocation] = useState(null);

    const fetchUserLocation = async () => {
        if (!location) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    let results = {
                        lat: Number(position.coords.latitude.toFixed(7)),
                        lng: Number(position.coords.longitude.toFixed(7)),
                    };
                    setLocation(results);
                });
            }
        }
    };

    const fetchRsvpData = async () => {
        const rsvpEventsRequest = await axios(`${API_BASE_URL}/rsvp/user`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setRsvpEvents(rsvpEventsRequest.data);
    };

    const fetchEventData = async () => {
        if (!location) {
            axios(`${API_BASE_URL}/event/all`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            }).then(res => {
                if (res.data) {
                    setEvents(res.data);
                }
            });
        } else if (location) {
            axios
                .get(
                    `${API_BASE_URL}/event/location/2000/${location.lat}/${
                        location.lng
                    }`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(
                                localStorage.getItem("jwtToken")
                            ),
                        },
                    }
                )
                .then(res => {
                    if (res.data) {
                        setEvents(res.data);
                    }
                });
        }
    };

    useEffect(() => {
        fetchUserLocation();
        fetchRsvpData();
        fetchEventData();
    }, []);

    let rsvpEventList = [];
    const generateRsvpEventList = rsvpData => {
        rsvpData.forEach(rsvp => {
            rsvpEventList.push(rsvp.eventId);
        });
    };

    let rsvpEventCardList, localEventCardList;
    if (rsvpEvents) {
        generateRsvpEventList(rsvpEvents);
        rsvpEventCardList = rsvpEventList.map((event, index) => {
            return <EventCard key={index} event={event} />;
        });
    }

    if (events) {
        localEventCardList = events.map((event, index) => {
            return <EventCard key={index} event={event} />;
        });
    }

    return (
        <React.Fragment>
            <h2>My Events</h2>
            <div className='columns'>
                {rsvpEventCardList}
                {localEventCardList}
            </div>
        </React.Fragment>
    );
}
