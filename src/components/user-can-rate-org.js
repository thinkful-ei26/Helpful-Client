// import React, { useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from '../config';
import '../stylesheets/user-can-rate-org.css';

class UserCanRateOrg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'blue' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('LOG user rating ', this.state.value);
    event.preventDefault();
  }

  render() {
    console.log('LOG 2', this.state.value);
    return (
      <form action="#">
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>
              Will you rate us?
            </option>
            <option value="1">one star</option>
            <option value="2">two star</option>
            <option value="3">three star</option>
            <option value="3">four star</option>
            <option value="3">five star</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </form>
    );
  }
}

export default UserCanRateOrg;
