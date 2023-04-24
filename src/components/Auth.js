import React, { useState } from "react";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Typography from "@mui/material/Typography";
import "../Auth.css";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MuiTelInput } from "mui-tel-input";

export default function Auth() {
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  }

  var modal = document.getElementById("login-form");
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div className="full-page">
      <div id="login-form" className="login-page">
        <div className="form-box">
          <div className="button-box">
            <div id="auth-btn"></div>
            <button type="button" onClick={login} className="toggle-btn">
              Log In
            </button>
            <button type="button" onClick={register} className="toggle-btn">
              Register
            </button>
          </div>
          <form id="login" className="input-group-login">
            <input
              type="text"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button type="submit" className="submit-btn">
              Log in
            </button>
          </form>
          <form id="register" className="input-group-register">
            <input
              type="text"
              className="input-field"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Last Name "
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms and conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
