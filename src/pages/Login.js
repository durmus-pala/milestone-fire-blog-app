import { TextField } from "@material-ui/core";
import React from "react";
import blok from "../assets/blok.png";

const Login = () => {
  return (
    <div className="login">
      <img src={blok} alt="login" className="login-img" />
      <form noValidate autoComplete="off">
        <br></br>
        <TextField
          className="login-email"
          type="email"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Your E-mail Please..."
        />
        <br />
        <br />
        <TextField
          className="login-password"
          type="password"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Your Password Please..."
        />
      </form>
    </div>
  );
};

export default Login;
