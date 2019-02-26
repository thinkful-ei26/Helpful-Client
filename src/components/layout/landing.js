import React from "react";
import { Route } from "react-router-dom";
const LandingPage = props => {
    let token = localStorage.getItem("jwtToken");
    if (token) {
        props.history.push("/dashboard");
    }

    return (
        <Route
            render={({ history }) => (
                <div className='landing-container'>
                    <div className='landing-main'>
                        <div className='landing-text-box'>
                            <p>
                                Helpfull is where communities come together.{" "}
                                <p>Help. Do good. Make friends. </p>
                            </p>
                        </div>

                        <form>
                            <button
                                onClick={() => history.push(`/register`)}
                                className=''>
                                Register
                            </button>
                            <button onClick={() => history.push(`/login`)}>
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            )}
        />
    );
};

export default LandingPage;
