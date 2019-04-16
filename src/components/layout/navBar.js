import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const NavBar = props => {
    const [toggle, setToggle] = useState(false);
    let token = localStorage.getItem("jwtToken");
    let navRight, sideNav, toggleBurgerClass, toggleMenuClass;

    if (toggle) {
        toggleBurgerClass = "navbar-item navbar-burger burger is-active";
        toggleMenuClass = "navbar-item navbar-menu is-active";
    } else {
        toggleBurgerClass = " navbar-burger burger";
        toggleMenuClass = " navbar-menu";
    }

    if (token) {
        navRight = (
            <div id='navbarBasicExample' className={toggleMenuClass}>
                <div className='navbar-start' />

                <div className='navbar-end'>
                    <a
                        href='#dashboard'
                        className='navbar-item is-danger'
                        onClick={() => props.history.push("/dashboard")}>
                        Dashboard
                    </a>

                    <a
                        href='#search'
                        className='navbar-item is-danger'
                        onClick={() => props.history.push("/search")}>
                        Search
                    </a>

                    <div className='navbar-item has-dropdown is-hoverable is-danger'>
                        <a href='#organizations' className='navbar-link'>
                            Organizations
                        </a>

                        <div className='navbar-dropdown is-danger'>
                            <a
                                href='#createorgform'
                                className='navbar-item'
                                onClick={() =>
                                    props.history.push("/createorgform")
                                }>
                                Create
                            </a>
                            <a
                                href='#followedorgs'
                                className='navbar-item'
                                onClick={() =>
                                    props.history.push("/followedorgs")
                                }>
                                Followed
                            </a>
                            <hr className='navbar-divider' />
                            <a
                                href='#createdorgs'
                                className='navbar-item'
                                onClick={() =>
                                    props.history.push("/createdorgs")
                                }>
                                Mine
                            </a>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <div className='buttons is-danger'>
                            <a
                                href='#logout'
                                className='button'
                                onClick={() => logoutUser()}>
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const logoutUser = async () => {
        await localStorage.removeItem("jwtToken");
        props.history.push("/");
    };

    return (
        <React.Fragment>
            <header>
                <nav
                    className='navbar is-fixed-top is-primary'
                    role='navigation'
                    aria-label='main navigation'>
                    <div className='navbar-brand'>
                        <a className='navbar-item' href='/'>
                            <img
                                className='image is-48x48'
                                src='/logo.png'
                                alt='logo'
                            />
                            <span className='is-size-3 is-family-primary has-text-weight-bold'>
                                Helpfull
                            </span>
                        </a>
                        {token ? (
                            <a
                                href='#burger'
                                role='button'
                                className={toggleBurgerClass}
                                aria-label='menu'
                                aria-expanded='false'
                                data-target='navbarBurger'
                                onClick={() => setToggle(!toggle)}>
                                <span aria-hidden='true' />
                                <span aria-hidden='true' />
                                <span aria-hidden='true' />
                            </a>
                        ) : (
                            <div />
                        )}
                    </div>
                    {navRight}
                </nav>
                {sideNav}
            </header>
        </React.Fragment>
    );
};

export default withRouter(NavBar);
