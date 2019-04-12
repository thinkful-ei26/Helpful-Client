import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import Swal from "sweetalert2";

import jwt_decode from "jwt-decode";

const Login = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async history => {
        let data = {
            username: user,
            password,
        };
        axios
            .post(`${API_BASE_URL}/auth/login`, data)
            .then(res => {
                // Set token to localStorage
                if (res.data.reason) {
                    Swal.fire({
                        type: "error",
                        title: "Oops...",
                        text: res.data.message,
                    });
                    return "login";
                } else {
                    const token = res.data.authToken;
                    localStorage.setItem("jwtToken", token);
                    // Set token to Auth header
                    //setAuthToken(token);
                    // Decode token to get user data
                    const decoded = jwt_decode(token);
                    // Set current user
                    setCurrentUser(decoded);
                    let mytoken = localStorage.getItem("jwtToken");
                    return "dashboard";
                }
            })
            .then(destination => {
                history.push(`/${destination}`);
            });
        // .catch(err => {
        //     console.log(JSON.stringify(err, null, 2));
        //     return Swal.fire({
        //         type: "error",
        //         title: "Oops...",
        //         text: res.data.message,
        //     });
        // });
    };

    return (
        <Route
            render={({ history }) => (
                <div className='container'>
                    <div className='field'>
                        <Link to='/' className=''>
                            <i className='far fa-hand-point-left' />
                            <span> Back to home</span>
                        </Link>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input
                                className='input'
                                type='email'
                                placeholder='Email'
                                onChange={e => setUser(e.target.value)}
                            />
                            <span className='icon is-small is-left'>
                                <i className='fas fa-envelope' />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control has-icons-left'>
                            <input
                                className='input'
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className='icon is-small is-left'>
                                <i className='fas fa-lock' />
                            </span>
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control'>
                            <button
                                className='button is-success'
                                onClick={() => loginUser(history)}>
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            )}
        />
    );
};

export default Login;
