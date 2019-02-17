import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../stylesheets/dashboard-create-event.css';

export default function DashboardCreateEvent() {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    date: '',
    contact: '',
    imgUrl: '',
    orgId: '000000000001' // placeholder ID PRODUCTION TODO --> make this a real ID
  })

  const [success, setSuccess] = useState(false)

  const createOrg = async () => {
    const createOrgResult = await axios({
      method: 'post',
      url: `${API_BASE_URL}/event`,
      data: formData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
      }
    });
    setSuccess(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    createOrg();
  }

  if (success) {
    return (
      <p className="eventCreateSuccess">Event created succefully!</p>
    )
  }

  return (
    <div className="create-event-form">
      <form action="submit"
        onSubmit={e => handleSubmit(e)} >
        <fieldset>

          <legend>Create an event</legend>

          <div className="create-event-row">
            <label htmlFor="event-name"> Event name</label>
            <input type="text" placeholder="Event-name"
              onChange={e => setFormData({ ...formData, name: e.target.value })} />
          </div>

          <div className="create-event-row">

            <label htmlFor="event-description"> Description</label>
            <input type="text" placeholder="Description"
              onChange={e => setFormData({ ...formData, description: e.target.value })} />
          </div>
          <div className="create-event-row">
            <label htmlFor="event-location" placeholder="Location">
              Location
            </label>
            <input type="text"
              onChange={e => setFormData({ ...formData, location: e.target.value })} />
          </div>
          <div className="create-event-row">
            <label htmlFor="event-date"> Date</label>
            <input type="text" placeholder="Date"
              onChange={e => setFormData({ ...formData, date: e.target.value })} />
          </div>
          <div className="create-event-row">
            <label htmlFor="event-contact"> Contact</label>
            <input type="text"
              onChange={e => setFormData({ ...formData, contact: e.target.value })} />
          </div>

          <div className="create-event-row">
            <label htmlFor="eventImg">Image</label>
            <input type="text" placeholder="Paste Image URL here!"
              onChange={e => setFormData({ ...formData, imgUrl: e.target.value })} />
          </div>

          <div className="submit-cancel-buttons">
            <button className='submit'>Submit</button>
            <button>Cancel</button>
          </div>

        </fieldset>
      </form>
    </div>
  );
}
