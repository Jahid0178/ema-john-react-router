import React from "react";
import "./LogIn.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/shop";

  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit="">
          <input
            className="input-field"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
          />
          <br />
          <input className="regular-btn" type="submit" value="Log In" />
        </form>
        <p>
          New to ema-john{" "}
          <Link className="create-account-link" to="/register">
            Create-Account
          </Link>
        </p>
        <div className="or">--------Or--------</div>
        <button className="regular-btn" onClick={handleGoogleLogIn}>
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
