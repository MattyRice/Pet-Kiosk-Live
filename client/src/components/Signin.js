import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { signin } from "../api/auth";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
    redirectToDashboard: false,
  });

  const { email, password, errorMsg, loading, redirectToDashboard } = formData;

  //EVENT HANDLERS
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else {
      const { password, email } = formData;
      const data = { password, email };

      setFormData({ ...formData, loading: true });

      signin(data);
    }
  };

  //VIEWS
  const showSigninForm = () => (
    <div>
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <h2>Sign in</h2>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-paper-plane" />
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              placeholder="Email Address"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="password"
              value={password}
              placeholder="Password"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center">
        Dont have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );

  return (
    <div className="signupup-container">
      {errorMsg && showErrorMsg(errorMsg)}

      {loading && (
        <div className="text-center pt-5">
          {showLoading()}
          <p>Signing in...</p>
        </div>
      )}

      {showSigninForm()}
    </div>
  );
};

export default Signin;
