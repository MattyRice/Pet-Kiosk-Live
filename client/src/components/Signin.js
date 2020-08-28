import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { setAuthentication, isAuthenticated } from "../helpers/auth";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { signin } from "../api/auth";
import { set } from "mongoose";
import { token } from "morgan";

const Signin = () => {
  let history = useHistory();

  // IF user/admin is signed in and tries to go back to signin page
  // THEN this redirects them back to their respective dashboards
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 2) {
      history.push("/wholesale/dashboard");
    }
  }, [history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
  });

  const { email, password, errorMsg, loading } = formData;

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

      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);

          if (isAuthenticated() && isAuthenticated().role === 1) {
            console.log("Redirecting to admin dashboard");
            history.push("/admin/dashboard");
          } else if (isAuthenticated() && isAuthenticated().role === 0) {
            console.log("Redirecting to user dashboard");
            history.push("/user/dashboard");
          } else if (isAuthenticated() && isAuthenticated().role === 2) {
            console.log("Redirecting to wholesale dashboard");
            history.push("/wholesale/dashboard");
          }
        })
        .catch((err) => {
          console.log("Signin api function error", err);
        });
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
              type="password"
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
