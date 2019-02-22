import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
import axios from 'axios';

const RenderUserRole = () => {
  const [role, setRole] = useState('Member');
  const onLoad = event => {
    console.log(role);
  };

  const fetchRole = async () => {
    await axios(`${API_BASE_URL}/role/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
      }
    }).then(res => {
      console.log('***************', res.data);
      setRole(res.data[0].role);
    });
  };
  useEffect(() => {
    fetchRole();
    console.log('***********', role.data);
  }, [role]);

  return (
    <div>
      <p>{role}</p>
    </div>
  );
};

export default RenderUserRole;
