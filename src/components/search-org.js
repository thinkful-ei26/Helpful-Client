import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

import '../stylesheets/search-org.css';

export default function SearchOrg(props) {

    const [orgs, setOrgs] = useState(null);

    const fetchData = async () => {

        const getOrgs = await axios({
            method: 'get',
            url: `${API_BASE_URL}/org/all`,
            data: {
            }
        });
        setOrgs(getOrgs.data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (orgs) {
        console.log(orgs)
        const listNames = orgs.map((org, index) => {
            return <div onClick={() => props.history.push('/organization')} className='filtered-event'>
                <div className='filtered-event-title'>
                    <h2>{org.name}</h2>
                    <img alt='eventimg' src={org.imgUrl} />
                </div>
                <p>{org.description}</p>
                <span>Date: {org.date}</span>
                <span>Location:{org.location}</span>
                <span>Contact: {org.contact} for more information.</span>
            </div>
        })
        return (<div>
            <h3>{listNames}</h3>
        </div>)
    } else {
        return (<div>
            <h2> Loading organizations...</h2>
        </div>)
    }
}