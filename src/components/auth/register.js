import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import Swal from "sweetalert2";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const registerUser = history => {
        let usersData = {
            username: userName,
            email,
            password,
            passwordConfirmation,
        };
        return axios
            .post(`${API_BASE_URL}/users/register`, usersData)
            .then(() => history.push("/login"))
            .catch(err => {
                console.log(err.response);
                const { code, location, message, reason } = err.response.data;
                console.log(message);
                Swal.fire({
                    type: "error",
                    title: location,
                    text: message,
                    footer: code + " " + reason,
                });
            });
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
                        <p>
                            Already have an account?{" "}
                            <Link className='loginLink' to='/login'>
                                Log In
                            </Link>
                        </p>
                    </div>
                    <div className='field'>
                        <label className='label'>Username</label>
                        <div className='control has-icons-left'>
                            <input
                                className='input'
                                type='text'
                                placeholder='User1234'
                                onChange={e => setUserName(e.target.value)}
                            />
                            <span className='icon is-small is-left'>
                                <i className='fas fa-user' />
                            </span>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control has-icons-left'>
                            <input
                                className='input'
                                type='text'
                                placeholder='user@email.com'
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className='icon is-small is-left'>
                                <i className='fas fa-envelope' />
                            </span>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label'>Password</label>
                        <div className='control has-icons-left'>
                            <input
                                className='input'
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className='icon is-small is-left'>
                                <i className='fas fa-lock' />
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Confirm Password</label>
                        <div className='control has-icons-left'>
                            <input
                                className='input'
                                type='password'
                                placeholder='Confirm Password'
                                onChange={e =>
                                    setPasswordConfirmation(e.target.value)
                                }
                            />
                            <span className='icon is-small is-left'>
                                <i className='fas fa-lock' />
                            </span>
                        </div>
                    </div>
                    <button
                        className='button is-primary'
                        onClick={() => registerUser(history)}>
                        Register
                    </button>
                </div>
            )}
        />
    );
};

export default Register;
