import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Details from "./pages/Details";
import Login from "./pages/Login";
import NewBlog from "./pages/NewBlog";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UpdateBlog from "./pages/UpdateBlog";

function App() {
  return (
    <div className="App">
      <About />
      <Dashboard />
      <Details />
      <Login />
      <NewBlog />
      <Profile />
      <Register />
      <UpdateBlog />
    </div>
  );
}

export default App;
