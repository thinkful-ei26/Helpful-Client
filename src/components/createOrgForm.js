import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

import { API_BASE_URL } from "../config";

import "../stylesheets/createOrgForm.css";

export default function CreateOrgForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        contact: "",
        imgUrl: "",
    });

    const [success, setSuccess] = useState(false);

    const createOrg = async () => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/org`,
            data: formData,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        })
            .then(() => {
                setSuccess(true);
            })
            .catch(err => {
                console.log(err);
                alert("Organization already Exists");
                setSuccess(false);
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        createOrg();
    };

    if (success === true) {
        Swal.fire(
            "Right on!",
            "Your organization has been successfully created!",
            "success"
        );
        return <Redirect to='/createdorgs' />;
    }

    return (
        <div className='container'>
            <div className='containerB'>
                <form
                    action='submit'
                    className='pure-form pure-form-aligned'
                    id='createOrgForm'
                    onSubmit={e => handleSubmit(e)}>
                    <fieldset>
                        <h1>Create a new Organization</h1>
                        <div className='pure-control-group'>
                            <label htmlFor='org-name'>Name</label>
                            <input
                                className=''
                                required
                                type='text'
                                placeholder='Organization Name'
                                onChange={e =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='pure-control-group'>
                            <label htmlFor='org-location'>Address</label>
                            <input
                                className=''
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
                        {/* <div className='pure-control-group'>
                            <label htmlFor='org-location'>Address 2</label>
                            <input
                                className=''
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
                        </div> */}
                        <div className='pure-control-group'>
                            <label htmlFor='org-contact'>Phone Number</label>
                            <input
                                className=''
                                required
                                type='text'
                                placeholder='(800) 867-5309'
                                onChange={e =>
                                    setFormData({
                                        ...formData,
                                        contact: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='pure-control-group'>
                            <label htmlFor='orgImg'>Image URL</label>
                            <input
                                className=''
                                type='text'
                                placeholder='https://www.lorempixel.com/300'
                                onChange={e =>
                                    setFormData({
                                        ...formData,
                                        imgUrl: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='pure-control-group'>
                            <label htmlFor='org-description'>Description</label>
                            <textarea
                                required
                                className=' '
                                type='text'
                                form='createOrgForm'
                                rows='5'
                                placeholder='Describe the organization'
                                onChange={e =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='pure-control-group'>
                            <button
                                className='create-org-form-button'
                                type='submit'>
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}
