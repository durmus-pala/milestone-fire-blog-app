import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import blok from "../assets/blok.png";
import { SignIn, SignUpProvider } from "../helpers/Firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    SignIn(email, password, history);
    history.push("/");
  };

  const handleProvider = (e) => {
    e.preventDefault();
    SignUpProvider();
    history.push("/");
  };
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          className="login-password"
          type="password"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Your Password Please..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <br />
      <br />
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login
      </Button>
      <br />
      <br />
      <Button onClick={handleProvider}>Continue With Google</Button>
    </div>
  );
};

export default Login;
