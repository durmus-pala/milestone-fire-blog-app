import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import UpdateBlog from "../pages/UpdateBlog";
import NewBlog from "../pages/NewBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuAppBar from "../components/Navbar";
import { ProtectedRoute } from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/details/:id" component={Details} />
          <ProtectedRoute
            component={() => (
              <>
                <Route path="/profile" component={Profile} />
                <Route path="/edit/:id" component={UpdateBlog} />
                <Route path="/upload" component={NewBlog} />
              </>
            )}
          ></ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
