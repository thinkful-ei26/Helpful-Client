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
                <div className='registration-container'>
                    <div className='registraion-flex'>
                        <div className=''>
                            <Link to='/' className=' waves-effect btn-flat'>
                                <i className='material-icons left'>
                                    keyboard_backspace
                                </i>
                                Back to home
                            </Link>
                            <h4>Register below</h4>
                            <p className='1'>
                                Already have an account?{" "}
                                <Link className='loginLink' to='/login'>
                                    Log In
                                </Link>
                            </p>
                            <form
                                className='registration-form'
                                noValidate
                                onSubmit={e => e.preventDefault()}>
                                <label htmlFor='name' />
                                <input
                                    className='registration-inputs'
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    id='name'
                                    type='text'
                                    placeholder='Username'
                                />
                                <label htmlFor='email' />
                                <input
                                    className='registration-inputs'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    // id='email'
                                    type='email'
                                    placeholder='Email'
                                />
                                <label htmlFor='password' />
                                <input
                                    className='registration-inputs'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    // id='password'
                                    type='password'
                                    placeholder='Password'
                                />
                                <label htmlFor='passwordConfirmation' />
                                <input
                                    className='registration-inputs'
                                    value={passwordConfirmation}
                                    onChange={e =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                    id='passwordConfirmation'
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                <button
                                    className='registration-form-submit-button'
                                    onClick={() => registerUser(history)}
                                    style={{
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                    }}
                                    type='submit'>
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        />
    );
};

export default Register;
