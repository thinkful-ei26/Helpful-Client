import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import Swal from "sweetalert2";

import "../../stylesheets/login.css";

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
                // if (res.data.reason) {
                //     // alert(res.data.message);
                //     return "login";
                // } else {
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
                // }
            })
            .then(destination => {
                history.push(`/${destination}`);
            })
            .catch(err => {
                console.log(JSON.stringify(err, null, 2));
                return Swal.fire({
                    type: "error",
                    title: "Oops...",
                    text: err.message,
                });
            });
    };

    return (
        <Route
            render={({ history }) => (
                <div className='login-flex'>
                    <div className=''>
                        <Link to='/' className=''>
                            <i className='material-icons left'>
                                keyboard_backspace
                            </i>
                            Back to home
                        </Link>
                        <div className=''>
                            <h4>Login below</h4>
                            <p className='grey-text text-darken-1'>
                                Don't have an account?{" "}
                                <Link className='register' to='/register'>
                                    Register
                                </Link>
                            </p>
                            <div className='demo-credentials'>
                                <p className='grey-text text-darken-1'>
                                    Or try Helpfull with a demo user
                                </p>
                                <p className='grey-text text-darken-1'>
                                    Username: demo{" "}
                                </p>
                                <p className='grey-text text-darken-1'>
                                    Password: password12
                                </p>
                            </div>
                        </div>
                        <form
                            className='login-form'
                            noValidate
                            onSubmit={e => e.preventDefault()}>
                            <label className='emailLabel' htmlFor='email' />
                            <input
                                id='email'
                                type='text'
                                placeholder='Username'
                                onChange={e => setUser(e.target.value)}
                            />
                            <label
                                className='passwordLabel'
                                htmlFor='password'
                            />
                            <input
                                id='password'
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button
                                onClick={() => loginUser(history)}
                                type='submit'
                                className='login-form-submit-button'>
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            )}
        />
    );
};

export default Login;
