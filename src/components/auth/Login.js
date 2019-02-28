import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import "../../stylesheets/login.css";

import jwt_decode from "jwt-decode";

const Login = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    // ********************** this component needs some refactoring and also to point to dashboard when a user has token **************
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
                    alert(res.data.message);
                    return "login";
                } else {
                    const token = res.data.authToken;
                    console.log(res.data);
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
    };

    return (
        <Route
            render={({ history }) => (

                <div className='login-flex'>
                    <div className=''>
                        <Link to='/' className=''>
                            <i className='material-icons left'>keyboard_backspace</i>
                            Back to home
                            </Link>
                        <div className=''>
                            <h4>Login below</h4>
                            <p className='grey-text text-darken-1'>
                                Don't have an account?{" "}
                                <Link to='/register'>Register</Link>
                            </p>
                        </div>
                        <form
                            className='login-form'
                            noValidate
                            onSubmit={e => e.preventDefault()}>

                            <label htmlFor='email'>
                                Username or Email
                                    </label>
                            <input
                                id='email'
                                type='text'
                                onChange={e => setUser(e.target.value)}
                            />

                            <label htmlFor='password'>Password</label>
                            <input
                                id='password'
                                type='password'
                                onChange={e =>
                                    setPassword(e.target.value)
                                }
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
