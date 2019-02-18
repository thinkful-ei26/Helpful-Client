// import React, { useState, useEffect } from 'react';
import React from 'react';
import M from 'materialize-css';
// import axios from 'axios';
// import { API_BASE_URL } from '../config';
import '../stylesheets/user-can-rate-org.css';

class UserCanRateOrg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'One star' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    console.log('LOG user rating ', this.state.value);
    event.preventDefault();
  }

  render() {
    console.log('LOG 2', this.state.value);
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} action="#">
          <div className="input-field col s2">
            <select
              defaultValue={this.state.value}
              onChange={this.handleChange}
            >
              ><option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Rate this group</label>
          </div>
        </form>
      </div>
    );
  }
}

export default UserCanRateOrg;

