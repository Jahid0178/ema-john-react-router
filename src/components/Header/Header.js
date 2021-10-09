import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orders">Order-Review</NavLink>
        <NavLink to="/inventory">Manage Inventory Here</NavLink>
        {user.email && (
          <span className="user-name">Hello, {user.displayName}</span>
        )}
        {user?.email ? (
          <NavLink to="/login" onClick={logOut}>
            Log Out
          </NavLink>
        ) : (
          <NavLink to="/login">LogIn</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
