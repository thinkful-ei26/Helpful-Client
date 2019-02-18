import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { InitialMap } from './map';
import '../stylesheets/search-event.css';


export default function SearchEvent(props) {

    // const [events, setEvents] = useState(null);

    // const fetchData = async () => {

    //     const getEvents = await axios({
    //         method: 'get',
    //         url: `${API_BASE_URL}/event/all`,
    //         data: {
    //         },
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
    //         }

    //     });
    //     setEvents(getEvents.data)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    if (props.events) {
        const listNames = props.events.map(event => {
            return <div onClick={() => props.history.push('/event')} className='filtered-event'>
                <div className='filtered-event-title'>
                    <h2>{event.name}</h2>
                    <img alt='eventimg' src={event.imgUrl} />
                </div>
                <p>{event.description}</p>
                <span>Date: {event.date}</span>
                <span>Location: {event.location}</span>
                <span>Contact: {event.contact}</span>
            </div>
        })
        return (<div>
            <InitialMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            <h3>{listNames}</h3>
        </div>)
    } else {
        return (<div>

            <h2> Loading Events...</h2>
        </div>)
    }
}