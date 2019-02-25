import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function UserCanRateOrg(props) {
    const [rating, setRating] = useState(Number(0));
    const [avg, setAvg] = useState(0);
    const [length, setLength] = useState(0);
    const onChange = event => {
        console.log(`$$$$$$$$$$$$`, event.target.value);
        setRating(event.target.value);
    };

    const createRating = async rating => {
        await axios({
            method: "post",
            url: `${API_BASE_URL}/orgrating`,
            data: { rating, orgId: props.orgId },
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                ),
            },
        })
            .then(() => {
                return "";
            })
            .then(() => {
                fetchRatings();
            })
            .catch(error => {
                console.log(error);
                console.log("Your POST request did not complete");
            });
    };
    const fetchRatings = async () => {
        const fetchRatingsResult = await axios(
            `${API_BASE_URL}/orgrating/org/${props.orgId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            }
        );

        setAvg(fetchRatingsResult.data.avg);
        setLength(fetchRatingsResult.data.length);
    };

    useEffect(() => {
        fetchRatings();
    }, []);

    const onSubmit = event => {
        event.preventDefault();
        createRating(rating);
    };


    return (
        <div className='container'>
            <div className='row'>
                <div className='center'>
                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <div className='create-org-row'>
                                <div style={{ height: "3rem" }}>
                                    <label>Rate this group</label>
                                    <input
                                        onChange={onChange}
                                        type='number'
                                        list='userrating'
                                        min='1'
                                        max='5'
                                    />
                                    <ratinglist
                                        id='rating'
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
                        Average Rating: {avg} out of {length} reviews
                    </div>
                    <ul> Your Rating: {rating}</ul>
                </div>
            </div>
        </div>
    );
}
