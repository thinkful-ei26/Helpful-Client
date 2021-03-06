import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function UserCanRateOrg(props) {
    const [rating, setRating] = useState(Number(0));
    const [userRating, setUserRating] = useState([]);
    const [avg, setAvg] = useState(0);
    const [length, setLength] = useState(0);

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

        const fetchUserRating = await axios(
            `${API_BASE_URL}/orgrating/user/${props.orgId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                        localStorage.getItem("jwtToken")
                    ),
                },
            }
        );
        await setUserRating(fetchUserRating.data);
    };

    useEffect(() => {
        fetchRatings();
    }, []);

    const onRatingClick = event => {
        event.preventDefault();
        let form = event.target;
        let rating = form.rating.value;
        setRating(rating);
        createRating(rating);
    };

    if (userRating.length) {
        return (
            <div>
                <p>
                    Average Rating: {avg} out of {length} reviews
                </p>
            </div>
        );
    }

    return (
        <React.Fragment>
            <form onSubmit={onRatingClick}>
                <div className='rate-area'>
                    <input type='radio' id='5-star' name='rating' value='5' />
                    <label htmlFor='5-star' title='Amazing'>
                        5 stars
                    </label>
                    <input type='radio' id='4-star' name='rating' value='4' />
                    <label htmlFor='4-star' title='Good'>
                        4 stars
                    </label>
                    <input type='radio' id='3-star' name='rating' value='3' />
                    <label htmlFor='3-star' title='Average'>
                        3 stars
                    </label>
                    <input type='radio' id='2-star' name='rating' value='2' />
                    <label htmlFor='2-star' title='Not Good'>
                        2 stars
                    </label>
                    <input type='radio' id='1-star' name='rating' value='1' />
                    <label htmlFor='1-star' title='Bad'>
                        1 star
                    </label>
                </div>
                <button className='follow-button' type='submit'>
                    Submit your rating
                </button>
            </form>
        </React.Fragment>
    );
}
