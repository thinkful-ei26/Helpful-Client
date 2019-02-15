import React from "react";
import Login from "../auth/Login";
const LandingPage = () => {
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <span style={{ fontFamily: "monospace" }} className="bold">
              Words
            </span>
            Subway tile butcher taiyaki quinoa, cornhole ramps organic viral.
            Humblebrag hexagon jean shorts fanny pack. Franzen jean shorts plaid
            fixie, salvia XOXO vegan vice migas vexillologist pok pok scenester
            +1 unicorn ennui.
          </h4>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable teal lighten-2"
          >
            Register
          </button>
          <button
            style={{
              marginLeft: "2rem",
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect white hoverable black-text"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
