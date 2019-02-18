import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import M from 'materialize-css';

export default function UserCanRateOrg() {
  const [formData, setFormData] = useState({
    rating: ''
  });

  const [success, setSuccess] = useState(false);

  const postRating = async () => {
    const postRatingResult = await axios({
      method: 'post',
      url: `${API_BASE_URL}/org`,
      data: formData
    });
    setSuccess(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postRating();
  };

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });

  if (success) {
    return <p className="orgCreateSuccess">Thank you for rating us!</p>;
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
          {/* <label htmlFor="org-name"> Organization name</label>
          <input
            type="text"
            placeholder="Organization name"
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          /> */}
          <div class="input-field col s12">
            <select>
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}
