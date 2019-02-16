import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import SearchOrg from './search-org';
import SearchEvent from './search-event';
import '../stylesheets/search.css';

export default function Search(props) {

    const [component, setComponent] = useState('');

    /* Call these on click */

    const getEvent = async () => {

        const getEventPage = await axios({
            method: 'post',
            url: `${API_BASE_URL}/rsvp`,
            data: {
            }
        });
    }

    /* Call these on click */

    const getOrg = async () => {

        const getEventPage = await axios({
            method: 'post',
            url: `${API_BASE_URL}/rsvp`,
            data: {
            }
        });
    }


    return (<div>
        <div className="search-header">
            <h1>nav bar and stuff here</h1>
        </div>
        <div className='filter-form'>
            <h2> Filter by:</h2>
            <div>
                <span className='big-font'> Distance(miles): </span>
                <select className='select-custom' onChange={e => console.log(e.target.value)}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                    <option value='150'>150</option>
                </select>
            </div>
        </div>

        <div className="search-container">
            <button className="search-org-button" onClick={() => setComponent(<SearchOrg history={props.history} />)}> Search Organizations</button>
            <button className="search-event-button" onClick={() => setComponent(<SearchEvent history={props.history} />)}> Search Events</button>
        </div>
        {component}
    </div>)
}