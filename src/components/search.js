import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SearchOrg from "./searchOrg";
import SearchEvent from "./searchEvent";

export default function Search(props) {
    const [events, setEvents] = useState(null);
    const [orgs, setOrgs] = useState([]);
    const [length, setLength] = useState(orgs.length);
    const [location, setLocation] = useState(null);
    const [distance, setDistance] = useState(10000);
    const [type, setType] = useState("organizations");
    const [component, setComponent] = useState(null);

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
    const onSelectChange = e => {
        setType(e.target.value);
    };
    const onSubmit = e => {
        getEvent();
        getOrg();
        e.preventDefault();
        if (type === "organizations") {
            setComponent(
                <SearchOrg
                    history={props.history}
                    location={location}
                    orgs={orgs}
                />
            );
        }
        if (type === "events") {
            setComponent(
                <SearchEvent
                    history={props.history}
                    location={location}
                    events={events}
                />
            );
        }
    };
    const onChange = e => {
        e.preventDefault();
        setDistance(e.target.value);
    };
    const getEvent = async () => {
        if (location === null) {
        } else {
            const url = `${API_BASE_URL}/event/location/${distance}/${
                location.lat
            }/${location.lng}`;
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
        if (location === null) {
        } else {
            const getOrgs = await axios({
                method: "get",
                url: `${API_BASE_URL}/org/location/${distance}/${
                    location.lat
                }/${location.lng}`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            });
            setOrgs(getOrgs.data);
        }
    };

    useEffect(() => {
        fetchUserLocation();
        getEvent();
        getOrg();
        setLength(orgs.length);
    }, [location, length]);

    if (location === null) {
        return <div />;
    } else {
        return (
            <div className='container'>
                <form onSubmit={onSubmit} action='submit' className=''>
                    <div className='field'>
                        <label className='label'>Type</label>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <div className='select is-primary'>
                                <select
                                    className=''
                                    onChange={onSelectChange}
                                    id='event-search-select'>
                                    <option value='organizations'>
                                        Organizations
                                    </option>
                                    <option value='events'>Events</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Distance</label>
                    </div>
                    <div className='field has-addons'>
                        <div className='control'>
                            <input
                                className='input'
                                id='search-form-input'
                                onChange={onChange}
                                type='text'
                                placeholder='Enter Distance'
                            />
                        </div>
                        <div className='control'>
                            <button className='button'>Search</button>
                        </div>
                    </div>
                </form>
                <div className='' />
                <div className=''>{component}</div>
            </div>
        );
    }
}
