import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-2">
        <div className="nav-wrapper white">
          <a href="/" className="col s5 brand-logo center black-text">
            <img id="logo" src="/icon.png" alt="helpful" />
            Helpful
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
