import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import "../../stylesheets/register.css";
const Register = () => {
    // onChange = e => {
    //   this.setState({ [e.target.id]: e.target.value })
    // }
    // Non-asynchronous actions are very similar to useState hook
    // window.localStorage.getitem(user) || localStorage
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [submitting, setSubmitting] = useState(false);
    // const newUser = {
    //   userName: state.userName,
    //   email: state.email,
    //   password: state.password,
    //   passwordConfirmation: state.passwordConfirmation
    // };
    const registerUser = history => {
        let usersData = {
            username: userName,
            email,
            password,
            passwordConfirmation,
        };
        axios
            .post(`${API_BASE_URL}/users/register`, usersData)
            .then(() => history.push("/login")) // re-direct to login on successful register
            .catch(err => alert("Username already Exists"));
    };

    return (
        <Route
            render={({ history }) => (
                <div className='registration-container'>
                    <div className='registraion-flex' >
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
                                    <Link to='/login'>Log In</Link>
                                </p>
                            <form
                                className='registration-form'
                                noValidate
                                onSubmit={e => e.preventDefault()}>
                                <label htmlFor='name'>Name</label>
                                <input
                                    className='registration-inputs'
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    id='name'
                                    type='text'
                                />
                                <label htmlFor='email'>Email</label>
                                <input
                                    className='registration-inputs'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id='email'
                                    type='email'
                                />
                                <label htmlFor='password'>Password</label>
                                <input
                                    className='registration-inputs'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    id='password'
                                    type='password'
                                />
                                <label htmlFor='passwordConfirmation'>
                                    Confirm Password
                                </label>
                                <input
                                    className='registration-inputs'
                                    value={passwordConfirmation}
                                    onChange={e =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                    id='passwordConfirmation'
                                    type='password'
                                />


                                <button
                                    className='registration-form-submit-button'
                                    onClick={() => registerUser(history)}
                                    style={{
                                        width: "150px",
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
