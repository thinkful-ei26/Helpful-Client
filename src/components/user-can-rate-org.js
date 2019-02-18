import React, { useState, useEffect } from 'react';
// import React from 'react';
import M from 'materialize-css';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import '../stylesheets/user-can-rate-org.css';

class UserCanRateOrg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handleSubmit(event) {
  //   console.log('LOG user rating ', this.state.value);
  //   event.preventDefault();
  // }

  render() {
    console.log('LOG', this.state.value);
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} action="#">
          <div className="input-field col s2">
            <select
              defaultValue={this.state.value}
              onChange={this.handleChange}
            >
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
            <label>Rate this group</label>
          </div>
        </form>
      </div>
    );
  }
}

export default UserCanRateOrg;
