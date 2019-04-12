import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function CreateMeetup() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        contact: "",
        imgUrl: "",
        date: "",
    });

    const [success, setSuccess] = useState(false);

    const setMeetup = async () => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/meetup`,
            data: formData,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });
        setSuccess(true);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setMeetup();
    };

    if (success) {
        return <p className='orgCreateSuccess'>Meetup created succefully!</p>;
    }

    return (
        <div className='container'>
            <form
                action='submit'
                className='create-org-form'
                id='createOrgForm'
                onSubmit={e => handleSubmit(e)}>
                <fieldset>
                    <legend>Create a Meetup</legend>
                    <div className='create-org-row'>
                        <label htmlFor='org-name'>Name</label>
                        <input
                            type='text'
                            placeholder='name'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-org-row'>
                        <label htmlFor='org-description'>Description</label>
                        <textarea
                            type='text'
                            form='createOrgForm'
                            rows='5'
                            placeholder='Describe the meetup'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-org-row'>
                        <label htmlFor='org-location'>Location</label>
                        <input
                            type='textarea'
                            placeholder='Location'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    location: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-org-row'>
                        <label htmlFor='org-contact'>Contact</label>
                        <input
                            type='text'
                            placeholder='Contact info'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    contact: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className='create-org-row'>
                        <label htmlFor='orgImg'>Image</label>
                        <input
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
                    <div className='create-org-row'>
                        <label htmlFor='orgImg'>Date</label>
                        <input
                            type='date'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    date: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
