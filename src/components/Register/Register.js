import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-content">
        <h2>Create Account</h2>
        <form onSubmit="">
          <label htmlFor="name">Your Name</label>
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Enter your name"
            name=""
            id="name"
          />
          <br />
          <label htmlFor="email">Your Email</label>
          <br />
          <input
            className="input-field"
            type="email"
            name=""
            id="email"
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="password">Your Password</label>
          <br />
          <input
            className="input-field"
            type="password"
            name=""
            id="password"
            placeholder="Enter your password"
          />
          <br />
          <input className="regular-btn" type="submit" value="Submit" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="login-btn" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
