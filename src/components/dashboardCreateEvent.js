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
        <div className='container'>
            <form
                action='submit'
                className='form'
                onSubmit={e => handleSubmit(e)}>
                <div className='field'>
                    <label className='label'>Event Name</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='text'
                            placeholder='Event Name'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-signature' />
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Description</label>
                    <div className='control'>
                        <textarea
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                            className='textarea has-fixed-size'
                            placeholder='Event Description'
                            rows='3'
                        />
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Location</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='text'
                            placeholder='123 Anywhere Lane, Nowhereville, NA'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    location: e.target.value,
                                })
                            }
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-map-marked-alt' />
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Date</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='tel'
                            placeholder='26 December 2019'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    date: e.target.value,
                                })
                            }
                        />
                        <span className='icon is-small is-left'>
                            <i class='fas fa-calendar-day' />
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Organizer</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='tel'
                            placeholder='Jane Doe'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    contact: e.target.value,
                                })
                            }
                        />
                        <span className='icon is-small is-left'>
                            <i class='fas fa-user-cog' />
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Image URL</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='tel'
                            placeholder='https://www.lorempixel.com/300/300'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    imgUrl: e.target.value,
                                })
                            }
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-external-link-alt' />
                        </span>
                    </div>
                    <p className='help'>Recommended 300px * 300px or larger</p>
                </div>

                <div className='field'>
                    <div className='control'>
                        <button className='button is-link' type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
