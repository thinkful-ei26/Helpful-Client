import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  // onChange = e => {
  //   this.setState({ [e.target.id]: e.target.value })
  // }
  // const [state, setState] = useState("");
  // const [state, setState] = useState("");
  // const [state, setState] = useState("");
  // const [state, setState] = useState("");
  // const [state, setState] = useState("");
  // const [state, setState] = useState("");
  return (
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
              <input id="email" type="text" />
              <label htmlFor="email">Username or Email</label>
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input id="passwordConfirmation" type="password" />
              <label htmlFor="passwordConfirmation">Confirm Password</label>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.25px" }}>
              <button
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
  );
};

export default Login;
