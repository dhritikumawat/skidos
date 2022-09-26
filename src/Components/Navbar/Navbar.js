import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

// skidos logo
import logo from "../Logo/logo.png";

// Navbar component
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <a href>
            <img src={logo} alt="Logo" id="skidos_logo" />
          </a>
          <a href className="announcement_heading">
            <Link to="/announcements">Announcements</Link>
          </a>
        </div>
        <div className="nav_login_btn">
          <a href id="log_in">
            <Link to="/">Log in</Link>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
