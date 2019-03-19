import React, { useState, useEffect } from "react";
import axios from "axios";
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
                alert("Organization already Exists");
                setSuccess(false);
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        createOrg();
    };

    if (success) {
        return (
            <p className='orgCreateSuccess'>Organization created succefully!</p>
        );
    }

    return (
        <div className='create-org-form-container'>
            <form
                action='submit'
                className='create-org-form'
                id='createOrgForm'
                onSubmit={e => handleSubmit(e)}>
                <h1>Create a new Organization</h1>
                <label htmlFor='org-name' />
                <input
                    className='org-form-center-text'
                    required
                    type='text'
                    placeholder='Organization name'
                    onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
                <label htmlFor='org-description' />
                <textarea
                    required
                    className='creatOrgForm-desc org-form-center-text'
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
                <label htmlFor='org-location' />
                <input
                    className='org-form-center-text'
                    required
                    type='textarea'
                    placeholder='Location'
                    onChange={e =>
                        setFormData({
                            ...formData,
                            location: e.target.value,
                        })
                    }
                />
                <label htmlFor='org-contact' />
                <input
                    className='org-form-center-text'
                    required
                    type='text'
                    placeholder='Contact info'
                    onChange={e =>
                        setFormData({
                            ...formData,
                            contact: e.target.value,
                        })
                    }
                />
                <label htmlFor='orgImg' />
                <input
                    className='org-form-center-text'
                    type='text'
                    placeholder='Paste Image URL here!'
                    onChange={e =>
                        setFormData({ ...formData, imgUrl: e.target.value })
                    }
                />
                <button className='create-org-form-button' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}
