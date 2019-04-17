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
                <section
                    className='is-fullheight-with-navbar is-info'
                    id='no-padding'>
                    <div className='container hero-body'>
                        <p className='title hero-title'>
                            Helpfull is where communities come together.
                        </p>
                        <p className='title hero-title'>
                            Help. Do good. Make friends.
                        </p>
                    </div>

                    <div className='container'>
                        <div className='hero-footer'>
                            <button
                                className='button has-background-grey-lighter'
                                onClick={() => history.push(`/register`)}>
                                Register
                            </button>
                            <button
                                className='button is-primary'
                                onClick={() => history.push(`/login`)}>
                                Log In
                            </button>
                        </div>
                    </div>
                </section>
            )}
        />
    );
};

export default LandingPage;
