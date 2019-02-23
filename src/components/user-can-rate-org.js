import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default function UserCanRateOrg() {
  const [rating, setRating] = useState({
    rating: Number(5)
  }); //Default rating set to 5
  const [ratings, setRatings] = useState([]);
  const onChange = event => {
    setRating(event.target.value);
    console.log('****************', event.target.value);
  };

  const createRating = async () => {
    await axios({
      method: 'post',
      url: `${API_BASE_URL}/orgrating`, //CHECK THIS******************************
      data: { rating },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
      }
    })
      .then(() => {
        console.log('RATING', rating);
        return rating;
      })
      .then(() => {
        fetchRatings();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchRatings = async () => {
    const fetchRatingsResult = await axios(`${API_BASE_URL}/orgrating`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(localStorage.getItem('jwtToken'))
      }
    });
    console.log('$$$$$$$$$$$$$$$$', fetchRatingsResult.data[0].rating);
    setRatings(fetchRatingsResult.data);
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setRatings([...ratings, rating]);
    createRating(rating);
  };

  // const avg = 0;
  // if (ratings) {
  //   let avg;
  //   let sum = ratings.reduce(function(a, b) {
  //     return a + b;
  //   });
  //   return (avg = sum / ratings.length);
  // }

  // console.log('*************', avg);

  //5c6ad21d8368687005177507 orgId for test post
  return (
    <div className="container">
      <div className="row">
        <div className="center">
          <form action="submit" className="" onSubmit={e => handleSubmit(e)}>
            <fieldset>
              <div className="create-org-row">
                <div style={{ heigh: '500px', color: 'red' }}>
                  <label>Rate this group</label>
                  <select onChange={onChange} className="browser-default">
                    <option defaultValue="1">1 star</option>
                    <option defaultValue="2">2 stars</option>
                    <option defaultValue="3">3 stars</option>
                    <option defaultValue="4">4 stars</option>
                    <option defaultValue="5">5 stars</option>
                  </select>
                </div>
              </div>
              <a className="waves-effect waves-light btn">Submit</a>
              <div> </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
