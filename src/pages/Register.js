import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser, SignUpProvider } from "../helpers/Firebase";
import blok from "../assets/blok.png";
import google from "../assets/google.png";

const Register = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName, photo, history);
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
          type="text"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Your First Name Please..."
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          className="login-email"
          type="text"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Your Last Name Please..."
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
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
        <br />
        <br />
        <TextField
          className="login-password"
          type="text"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter Your Photo URL here..."
          onChange={(e) => setPhoto(e.target.value)}
        />
      </form>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
      <br />
      <br />
      <Button
        onClick={handleProvider}
        style={{
          width: "70%",
          display: "block",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <p>Continue With Google</p>
        <img src={google} alt="google" style={{ width: "15%" }} />
      </Button>
    </div>
  );
};

export default Register;
