
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../stylesheets/dashboard-create-event.css'

export default function CreateOrgForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    contact: '',
    imgUrl: ''
  });

  const [success, setSuccess] = useState(false);

  const createOrg = async () => {
    const createOrgResult = await axios({
      method: 'post',
      url: `${API_BASE_URL}/org`,
      data: formData,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(localStorage.getItem("jwtToken"))
      }
    });
    setSuccess(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createOrg();
  };

  if (success) {
    return <p className="orgCreateSuccess">Organization created succefully!</p>;
  }
  return (
    <form
      action="submit"
      className="create-org-form"
      id="createOrgForm"
      onSubmit={e => handleSubmit(e)}
    >
      <fieldset>
        <legend>Create an Organization</legend>

        <div className="create-org-row">
          <label htmlFor="org-name"> Organization name</label>
<<<<<<< HEAD
          <input
            type="text"
            placeholder="Organization name"
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
=======
          <input type="text" placeholder="Organization name"
            onChange={e => setFormData({ ...formData, name: e.target.value })} />
>>>>>>> e598d9921a360e7d4fe18bd026a34989d51b65d2
        </div>

        <div className="create-org-row">
          <label htmlFor="org-description"> Description</label>
<<<<<<< HEAD
          <textarea
            type="text"
            form="createOrgForm"
            rows="5"
            placeholder="Describe the organization"
            onChange={e =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
=======
          <textarea type="text" form="createOrgForm" rows="5" placeholder="Describe the organization"
            onChange={e => setFormData({ ...formData, description: e.target.value })} />
>>>>>>> e598d9921a360e7d4fe18bd026a34989d51b65d2
        </div>

        <div className="create-org-row">
          <label htmlFor="org-location">Location</label>
<<<<<<< HEAD
          <input
            type="textarea"
            placeholder="Location"
            onChange={e =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
=======
          <input type="textarea" placeholder="Location"
            onChange={e => setFormData({ ...formData, location: e.target.value })} />
>>>>>>> e598d9921a360e7d4fe18bd026a34989d51b65d2
        </div>

        <div className="create-org-row">
          <label htmlFor="org-contact"> Contact</label>
<<<<<<< HEAD
          <input
            type="text"
            placeholder="Contact info"
            onChange={e =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
=======
          <input type="text" placeholder="Contact info"
            onChange={e => setFormData({ ...formData, contact: e.target.value })} />
>>>>>>> e598d9921a360e7d4fe18bd026a34989d51b65d2
        </div>

        <div className="create-org-row">
          <label htmlFor="orgImg"> Contact</label>
<<<<<<< HEAD
          <input
            type="text"
            placeholder="Paste Image URL here!"
            onChange={e => setFormData({ ...formData, imgUrl: e.target.value })}
          />
=======
          <input type="text" placeholder="Paste Image URL here!"
            onChange={e => setFormData({ ...formData, imgUrl: e.target.value })} />
>>>>>>> e598d9921a360e7d4fe18bd026a34989d51b65d2
        </div>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
