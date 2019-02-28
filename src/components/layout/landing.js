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
                <section >
                    <main className='landing-page-main'>
                        <div className='text-box'>
                            <span className='text-box-span'>
                                Helpfull is where communities come together.
                            </span>
                            <span className='text-box-span'>
                                Help. Do good. Make friends.
                            </span>
                        </div>

                        <form className='landing-page-form' action=''>
                            <button
                                className='button-register'
                                onClick={() => history.push(`/register`)}>
                                Register
                            </button>

                            <button
                                className='button-login'
                                onClick={() => history.push(`/login`)}>
                                Log In
                            </button>
                        </form>
                    </main>
                </section>
            )}
        />
    );
};

export default LandingPage;
