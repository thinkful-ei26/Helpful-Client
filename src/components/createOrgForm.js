import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

import { API_BASE_URL } from "../config";

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
            <p>Create an Organization</p>
            <form
                action='submit'
                className='pure-form pure-form-aligned'
                id='createOrgForm'
                onSubmit={e => handleSubmit(e)}>
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='text'
                            placeholder='Organization Name'
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
                    <label className='label'>Address</label>
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
                    <label className='label'>Phone Number</label>
                    <div className='control has-icons-left'>
                        <input
                            className='input'
                            type='tel'
                            placeholder='+1 (800) 867-5309'
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    contact: e.target.value,
                                })
                            }
                        />
                        <span className='icon is-small is-left'>
                            <i className='fas fa-phone' />
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
                            placeholder='Organization Name is a non-profit specializing in x, y and z sectors. Founded in Nowheresville, NA: Organization Name has been critical to serving a, b and c communities'
                        />
                    </div>
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
