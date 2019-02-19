import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { InitialMap } from './map';
import '../stylesheets/search-org.css';

export default function SearchOrg(props) {

    // const [orgs, setOrgs] = useState(null);

    // const fetchData = async () => {

    //     const getOrgs = await axios({
    //         method: 'get',
    //         url: `${API_BASE_URL}/org/all`,
    //         data: {
    //         },
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
    //         }
    //     });
    //     setOrgs(getOrgs.data)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    if (props.orgs) {
        const listNames = props.orgs.map(org => {
            return <div onClick={() => props.history.push('/org')} className='filtered-event'>
                <div className='filtered-event-title'>
                    <h2>{org.name}</h2>
                    <img alt='eventimg' src={org.imgUrl} />
                </div>
                <p>{org.description}</p>
                <span>Date: {org.date}</span>
                <span>Location: {org.location}</span>
                <span>Contact: {org.contact}</span>
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
            <h2> Loading organizations...</h2>
        </div>)
    }
}