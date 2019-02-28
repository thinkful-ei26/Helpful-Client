import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const NavBar = props => {
    const [navClass, setNavClass] = useState("false");
    let token = localStorage.getItem("jwtToken");
    let navRight, sideNav;

    if (token) {

        navRight = (
            <ul>
                <li>
                    <a
                        href='#dashboard'
                        onClick={() => props.history.push("/dashboard")}>
                        Dashboard
                    </a>
                </li>

                {/* <li>
                    <a
                        href='#events'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/events")}>
                        My Events
                    </a>
                </li> */}

                <li>
                    <a
                        href='#createorganization'
                        onClick={() => props.history.push("/createorgform")}>
                        Create Group
                    </a>
                </li>

                {/* <li>
                    <a
                        href='#meetup'
                        className='waves-effect waves-teal'
                        onClick={() => props.history.push("/create-meetup")}>
                        Create Meetup
                    </a>
                </li> */}

                <li>
                    <a
                        href='/createdorgs'
                        onClick={() => props.history.push("/createdorgs")}>
                        My Groups
                    </a>
                </li>

                <li>
                    <a
                        href='#followedorganizations'
                        onClick={() => props.history.push("/followedorgs")}>
                        Followed
                    </a>
                </li>
                <li>
                    <a
                        href='#search'
                        onClick={() => props.history.push("/search")}>
                        Search Tool
                    </a>
                </li>

                <li>
                    <a
                        href='#logout'
                        onClick={() => logoutUser()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
        sideNav = (
            <a
                onClick={e => {
                    e.preventDefault();
                    setNavClass("true");
                }}
                href='#menu'
                id='hamburger'
                data-target='slide-out'
                className='sidenav-trigger'
            >
                <i className='material-icons hamburger'>menu</i>
            </a>
        );
    }

    const logoutUser = async () => {
        await localStorage.removeItem("jwtToken");
        props.history.push("/");
    };
    
    return (
        <React.Fragment>
            <section class="header-container">
                <header>
                    <span class="logo">
                        <a href="/">
                            <h1>
                                <span class='logo-style-one'>Help</span>
                                <span class='logo-style-two'>full</span>
                            </h1>
                        </a>
                    </span>

                    <nav>
                        {navRight}
                    </nav>
                    {sideNav}
                </header>
            </section>
            {/* <div className='navbar-fixed'>
                <nav className='white' role='navigation'>
                    <div className='container'>
                        <div className='nav-wrapper'>
                            <div className='logo-container'>
                                <a href='/' className=''>
                                    <img
                                        className='logo hide-on-med-and-down'
                                        id='logo'
                                        src='/icon.png'
                                        alt='helpful'
                                    />
                                </a>
                                <a href='/' className='brand-logo black-text'>
                                    Helpful
                                </a>
                            </div>
                            {navRight}
                        </div>
                    </div>
                    {sideNav}
                </nav>
            </div> */}

            <ul id='mySidenav' className={navClass}>
                
                <a href="#closemenu" class="closebtn" 
                    onClick={e => {
                        e.preventDefault();
                        setNavClass("false");
                    }}
                >
                &times;</a>
        
                <li>
                    <a
                        href='#dashboard'
                        // className='waves-effect waves-teal'
                        onClick={() => props.history.push("/dashboard")}>
                        <i className='material-icons'>dashboard</i>Dashboard
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#createorganization'
                        // className='waves-effect'
                        onClick={() => props.history.push("/createorgform")}>
                        <i className='material-icons black-text'>create</i>
                        Create Organization
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                {/* <li>
                    <a
                        href='#createmeetup'
                        className='waves-effect'
                        onClick={() => props.history.push("/create-meetup")}>
                        <i className='material-icons black-text'>create</i>
                        Create Meetup
                    </a>
                </li> */}
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#followedorganizations'
                        // className='waves-effect'
                        onClick={() => props.history.push("/followedorgs")}>
                        <i className='material-icons'>subscriptions</i>Followed
                        Organizations
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#search'
                        // className='waves-effect'
                        onClick={() => props.history.push("/search")}>
                        <i className='material-icons'>search</i>Search Tool
                    </a>
                </li>
                <li>
                    <div className='divider' />
                </li>
                <li>
                    <a
                        href='#logout'
                        // className='waves-effect'
                        onClick={() => logoutUser()}>
                        <i className='material-icons'>power_settings_new</i>
                        Logout
                    </a>
                </li>
            </ul> 
        </React.Fragment>
    );
};

export default withRouter(NavBar);
