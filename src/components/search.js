import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SearchOrg from "./search-org";
import SearchEvent from "./search-event";
import "../stylesheets/search.css";

export default function Search(props) {
    const [component, setComponent] = useState("");
    const [events, setEvents] = useState(null);
    const [orgs, setOrgs] = useState(null);
    const [location, setLocation] = useState(null);
    const [distance, setDistance] = useState(50);
    const [type, setType] = useState('organizations');


    // get user location
    const fetchUserLocation = async () => {
        if (!location) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let results = {
                        lat: Number(position.coords.latitude.toFixed(7)),
                        lng: Number(position.coords.longitude.toFixed(7)),
                    };
                    setLocation(results);
                });
            }

        }
    };

    const onSelectChange = e => {
        console.log(e.target.value);
        setType(e.target.value);
        getEvent();
        getOrg();
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(distance);
        if (type === 'organizations') {
            setComponent(
                <SearchOrg
                    history={props.history}
                    location={location}
                    orgs={orgs}
                />
            )
        }
        if (type === 'events') {
            setComponent(
                <SearchEvent
                    history={props.history}
                    location={location}
                    events={events}
                />
            )
        }


    }

    /* on click */

    const onChange = e => {
        e.preventDefault();
        console.log(e.target.value);
        setDistance(e.target.value);
    }

    /* Call these on click */
    const getEvent = async () => {
        if (location === null) {
        } else {
            const url = `${API_BASE_URL}/event/location/${distance}/${location.lat}/${
                location.lng
                }`;
            const getEvents = await axios({
                method: "get",
                url: url,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            });
            setEvents(getEvents.data);
        }
    };

    const getOrg = async () => {
        const getOrgs = await axios({
            method: "get",
            url: `${API_BASE_URL}/org/location/${distance}/${location.lat}/${
                location.lng
                }`,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setOrgs(getOrgs.data);
    };

    useEffect(() => {
        fetchUserLocation();
        getEvent();
        getOrg();
    }, [location]);

    if (location === null) {
        return <div />;
    } else {
        return (
            <React.Fragment>
                <div class="container-search">
                    <div class='flex-container'>
                        <div class="hero-box">
                            <hero class="search-hero">
                                <div class="text-box">Find events.</div>
                                <img
                                    src="./img/community5.jpg"
                                    alt=""
                                />
                            </hero>
                            <hero class="search-hero">
                                <div class="text-box">Volunteer.</div>
                                <img
                                    src="./img/community3.jpg"
                                    alt=""
                                />
                            </hero>
                            <hero class="search-hero">
                                <div class="text-box">Make Friends.</div>
                                <img
                                    src="./img/community4.jpg"
                                    alt=""
                                />
                            </hero>
                        </div>
                        <form onSubmit={onSubmit} action="submit" class="form-search">
                            <label for="search">Filter your search by...</label>
                            <select onChange={onSelectChange} name="event-search" id="event-search-select">
                                <option value="organizations">Organizations</option>
                                <option value="events">Events</option>
                            </select>
                            <input onChange={onChange} type="text" placeholder="Enter Distance" />

                            <button id="search-button">Search</button>
                        </form>
                        <div class="search-results"></div>
                    </div>
                    <div class='blocker'>
                        {component}
                    </div>
                </div>
            </React.Fragment >
        );
    }

}
