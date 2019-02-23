import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default function UserCanRateOrg() {
  const [rating, setRating] = useState({
    rating: 0
  }); //Default rating set to 0
  const [ratings, setRatings] = useState([]);
  const onChange = event => {
    setRating(event.target.value);
    console.log('****************', event.target.value); //This works, user input is captured.
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
    console.log('$$$$$$$$$$$$$$$$', fetchRatingsResult.data); //The stored rating is returned.
    const fetchResult = fetchRatingsResult.data;
    console.log('&&&&&&&&&&&&&&&&', fetchResult);
    setRatings(fetchRatingsResult.data);
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setRatings([...ratings, rating]);
    createRating(rating);
  };
  const ratingAvg = fetchResult => {
    let result = [];
    fetchResult.map(obj => {
      result.push(obj.rating);
    });
    return result.reduce((a, b) => a + b, 0) / result.length;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="center">
          <form action="submit" className="" onSubmit={e => onSubmit(e)}>
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
              <button className="waves-effect waves-light btn">Submit</button>
               <div>Rating Average:  </div> 
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
