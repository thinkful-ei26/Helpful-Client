import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function UserCanRateOrg() {
    const [rating, setRating] = useState(0);
    const [ratings, setRatings] = useState([]);

    const onChange = event => {
        setRating(event.target.value);
    };

    const createRating = async rating => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/orgrating`,
            data: { rating },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        })
            .then(() => {
                return rating;
            })
            .then(() => {
                console.log("$$$$$$$$$$$$$$", rating);
                fetchRatings();
            })
            .catch(error => {
                console.log(error);
                console.log(
                    "Your POST request did not complete, most likely because you have allready rated this group and ratings need to be unique"
                );
            });
    };
    const fetchRatings = async () => {
        const fetchRatingsResult = await axios(`${API_BASE_URL}/orgrating`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        });

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

    const ratingAvg = ratings => {
        let result = [];
        ratings.map(obj => {
            result.push(obj.rating);
        });
        return result.reduce((a, b) => a + b, 0) / result.length;
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='center'>
                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <div className='create-org-row'>
                                <div style={{ heigh: "500px", color: "red" }}>
                                    <label>Rate this group</label>

                                    <input
                                        type='number'
                                        list='userrating'
                                        min='1'
                                        max='5'
                                    />
                                    <ratinglist
                                        id='rating'
                                        onChange={onChange}
                                        className='browser-default'>
                                        <option defaultValue='1' />
                                        <option defaultValue='2' />
                                        <option defaultValue='3' />
                                        <option defaultValue='4' />
                                        <option defaultValue='5' />
                                    </ratinglist>
                                </div>
                            </div>
                        </fieldset>
                        <button type='submit'>Submit your rating</button>
                    </form>
                    <div>
                        Average Rating: {ratingAvg(ratings)} out of{" "}
                        {ratings.length} reviews
                    </div>
                    <ul> Your Rating: {rating}</ul>
                </div>
            </div>
        </div>
    );
}
