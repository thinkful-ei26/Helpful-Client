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
                <section className='hero is-link is-fullheight-with-navbar'>
                    <div className='hero-body'>
                        <div className='container'>
                            <p className='title'>
                                Helpfull is where communities come together.
                            </p>
                            <p className='title'>
                                Help. Do good. Make friends.
                            </p>
                            <form className='landing-page-form' action=''>
                                <button
                                    className='button'
                                    onClick={() => history.push(`/register`)}>
                                    Register
                                </button>
                                <button
                                    className='button'
                                    onClick={() => history.push(`/login`)}>
                                    Log In
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            )}
        />
    );
};

export default LandingPage;
