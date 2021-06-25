import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContextProvider";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContextProvider);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser.displayName) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
