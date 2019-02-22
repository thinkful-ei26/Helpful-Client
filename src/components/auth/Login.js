import React, { useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { API_BASE_URL } from "../../config";

import jwt_decode from "jwt-decode";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // ********************** this component needs some refactoring and also to point to dashboard when a user has token **************
  const loginUser = async history => {
    let data = {
      username: user,
      password
    };

    axios
      .post(`${API_BASE_URL}/auth/login`, data)
      .then(res => {
        // Set token to localStorage
        const token = res.data.authToken;
        localStorage.setItem("jwtToken", token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        setCurrentUser(decoded);
      })
      .then(() => {
        history.push("/dashboard");
      });
  };

  return (
    <Route
      render={({ history }) => (
        <div className="container">
          <div className="row" style={{ marginTop: "4rem" }}>
            <div className="col s8 offset-s2">
              <Link to="/" className=" waves-effect btn-flat">
                <i className="material-icons left">keyboard_backspace</i>
                Back to home
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.25px" }}>
                <h4>Login below</h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
              <form noValidate onSubmit={e => e.preventDefault()}>
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="text"
                    onChange={e => setUser(e.target.value)}
                  />
                  <label htmlFor="email">Username or Email</label>
                </div>
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.25px" }}>
                  <button
                    onClick={() => loginUser(history)}
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable teal lighten-2"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Login;
