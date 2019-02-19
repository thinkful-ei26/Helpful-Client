import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import M from "materialize-css";

export default function UserCanRateOrg() {
  const [formData, setFormData] = useState({
    rating: ""
  });

  const [success, setSuccess] = useState(false);

  const postRating = async () => {
    const postRatingResult = await axios({
      method: "post",
      url: `${API_BASE_URL}/org`,
      data: formData
    });
    setSuccess(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postRating();
  };

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });

  if (success) {
    return <p className="orgCreateSuccess">Thank you for rating us!</p>;
  }
  //5c6ad21d8368687005177507 orgId for test post
  return (
    <div className="container">
      <div className="row">
        <div className="center">
          <form action="submit" className="" onSubmit={e => handleSubmit(e)}>
            <fieldset>
              <div className="create-org-row">
                <div>
                  <select>
                    <option value="" disabled selected>
                      Rate this group
                    </option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                  </select>
                </div>
              </div>
              <a class="waves-effect waves-light btn">Submit</a>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
