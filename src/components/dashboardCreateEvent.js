import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function DashboardCreateEvent(props) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        date: "",
        contact: "",
        imgUrl: "",
        orgId: props.id,
    });

    const [success, setSuccess] = useState(false);

    const createEvent = async () => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/event`,
            data: formData,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        })
            .then(() => setSuccess(true))
            .catch(err => {
                alert("Event name and description must be unique");
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        createEvent();
    };

    if (success) {
        return <p className='eventCreateSuccess'>Event created succefully!</p>;
    }

    return (
        <div className='create-event-form'>
            <form action='submit' onSubmit={e => handleSubmit(e)}>
                <fieldset>
                    <legend>Create an event</legend>
                    <div className='create-event-row'>
                        <label htmlFor='event-name' />
                        <input
                            className='event-input'
                            required
                            type='text'
                            placeholder='Event Name'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-event-row'>
                        <label htmlFor='event-description' />
                        <input
                            className='event-input'
                            required
                            type='text-area'
                            rows='5'
                            placeholder='Description'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-event-row'>
                        <label htmlFor='event-location' />
                        <input
                            className='event-input'
                            required
                            type='text'
                            placeholder='Location'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    location: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-event-row'>
                        <label htmlFor='event-date' />
                        <input
                            className='event-input'
                            required
                            type='text'
                            placeholder='Date'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    date: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-event-row'>
                        <label htmlFor='event-contact' />
                        <input
                            className='event-input'
                            required
                            type='text'
                            placeholder='Contact'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    contact: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-event-row'>
                        <label htmlFor='eventImg' />
                        <input
                            className='event-input'
                            type='text'
                            placeholder='Paste Image URL here!'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    imgUrl: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='submit-cancel-buttons'>
                        <button className='submit'>Submit</button>
                        <button>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
