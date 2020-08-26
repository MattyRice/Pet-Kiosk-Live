import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  //views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Pet Kiosk Live
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Category1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Category2
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mt-0 mt-lg-0">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  //render view
  return <header id="header">{showNavigation()}</header>;
};

export default Header;
