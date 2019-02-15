import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

const Register = () => {
  // onChange = e => {
  //   this.setState({ [e.target.id]: e.target.value })
  // }
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const newUser = {
    userName: this.state.userName,
    email: this.state.email,
    password: this.state.password,
    passwordConfirmation: this.state.passwordConfirmation
  };
  this.registerUser(newUser, this.props.history);
  // const [state, setState] = useState("");
  // const [state, setState] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className=" waves-effect btn-flat">
            <i className="material-icons left">keyboard_backspace</i>
            Back to home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.25px" }}>
            <h4>Register below</h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
          <form noValidate onSubmit={e => e.preventDefault()}>
            <div className="input-field col s12">
              <input
                value={userName}
                onChange={e => setUserName(e.target.value)}
                id="name"
                type="text"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s12">
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="email"
                type="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                id="password"
                type="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
                id="passwordConfirmation"
                type="password"
              />
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
