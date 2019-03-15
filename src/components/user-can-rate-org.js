import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function UserCanRateOrg(props) {
    const [rating, setRating] = useState(Number(0));
    const [userRating, setUserRating] = useState([]);
    const [avg, setAvg] = useState(0);
    const [length, setLength] = useState(0);
    // const onChange = event => {
    //     setRating(event.target.value);
    // };

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

    const onSubmit = event => {
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
                {/* <p> Your Rating: {userRating.rating}</p> */}
            </div>
        );
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                {/* <div className='create-org-row'> */}
                {/* <label>Rate this group</label>
                        <input
                            onChange={onChange}
                            type='number'
                            // list='userrating'
                            min='1'
                            max='5'
                        /> */}
                <div class='rate-area'>
                    <input type='radio' id='5-star' name='rating' value='5' />
                    <label for='5-star' title='Amazing'>
                        5 stars
                    </label>
                    <input type='radio' id='4-star' name='rating' value='4' />
                    <label for='4-star' title='Good'>
                        4 stars
                    </label>
                    <input type='radio' id='3-star' name='rating' value='3' />
                    <label for='3-star' title='Average'>
                        3 stars
                    </label>
                    <input type='radio' id='2-star' name='rating' value='2' />
                    <label for='2-star' title='Not Good'>
                        2 stars
                    </label>
                    <input type='radio' id='1-star' name='rating' value='1' />
                    <label for='1-star' title='Bad'>
                        1 star
                    </label>
                </div>

                {/* <ratinglist
                                        id='rating'
                                        className='browser-default'>
                                        <option defaultValue='1' />
                                        <option defaultValue='2' />
                                        <option defaultValue='3' />
                                        <option defaultValue='4' />
                                        <option defaultValue='5' />
                                    </ratinglist> */}
                {/* </div> */}
                <button className='follow-button' type='submit'>Submit your rating</button>
            </form>
        </React.Fragment>
    );
}
