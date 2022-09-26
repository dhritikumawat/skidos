import React, { useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";

// axios import starts--------------------
import axios from "axios";
// axios import ends----------------------

// toast message import starts-------------
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// toast message import ends---------------

// Login functionality starts---------------
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password
      })
      .then((result) => {
        toast.success("Log In Successful", {});
        setEmail("");
        setPassword("");
        navigate("/announcements");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please enter valid email id and password.", {});
      });
  };

  return (
    <>
      <div id="login-page">
        <form onSubmit={handleLogin}>
          <h2 className="login_heading">Log in</h2>
          <div className="input_fields">
            <label htmlFor="email" className="header_name">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="textfield"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email address"
            />
          </div>
          <div className="input_fields">
            <label htmlFor="password" className="header_name">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="textfield"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="button-wrapper">
            <button type="submit">Log in</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
export default Login;
