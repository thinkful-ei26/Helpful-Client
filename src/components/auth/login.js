import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import Swal from "sweetalert2";

const Login = props => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async props => {
        let data = {
            username: user,
            password,
        };
        await axios
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
                    return "dashboard";
                }
            })
            .then(destination => {
                props.history.push(`/${destination}`);
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

    const handleSubmit = (e, props) => {
        e.preventDefault();
        loginUser(props);
    };

    return (
        <Route
            render={({ history }) => (
                <div className='container'>
                    <form
                        action='submit'
                        className='form'
                        onSubmit={e => handleSubmit(e, props)}>
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
                                    type='text'
                                    placeholder='Username'
                                    onChange={e => setUser(e.target.value)}
                                />
                                <span className='icon is-small is-left'>
                                    <i className='fas fa-user' />
                                </span>
                            </p>
                            <p className='help'>
                                {" "}
                                <strong>Trial user:</strong> demo
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
                            <p className='help'>
                                {" "}
                                <strong>Trial password:</strong> password12
                            </p>
                        </div>
                        <div className='field'>
                            <p className='control'>
                                <button
                                    className='button is-success'
                                    type='submit'>
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        />
    );
};

export default Login;
