import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordconfirm: "",
    // agreetermandser: false,
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    passwordconfirm,
    // agreetermandser,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  //EVENT HANDLERS
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //Client Side validation
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(passwordconfirm)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else if (!equals(password, passwordconfirm)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      const { username, password, email } = formData;
      const data = { username, password, email };

      setFormData({ ...formData, loading: true });

      signup(data)
        .then((response) => {
          console.log("Axios signup success", response);
          setFormData({
            username: "",
            email: "",
            password: "",
            passwordconfirm: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("Axios signup error", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  // VIEWS
  const showSignupForm = () => (
    <div>
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              placeholder="Username"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
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
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock" />
                <i className="fa fa-check" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="passwordconfirm"
              value={passwordconfirm}
              placeholder="Confirm Password"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <Link href="#">Terms of Use</Link> &amp;{" "}
            <Link href="#">Privacy Policy</Link>
          </label>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        Already have an account? <a href="#">Login here</a>
      </div>
    </div>
  );

  //   RENDER
  return (
    <div className="signupup-container">
      {errorMsg && showErrorMsg(errorMsg)}
      {successMsg && showSuccessMsg(successMsg)}

      {loading && (
        <div className="text-center pt-5">
          {showLoading()}
          <p>Getting your account ready...</p>
        </div>
      )}

      {showSignupForm()}
    </div>
  );
};

export default Signup;
