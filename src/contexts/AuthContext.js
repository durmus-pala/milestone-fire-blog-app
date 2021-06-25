import { createContext, useState, useEffect } from "react";
import { userObserver } from "../helpers/Firebase";
export const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    date: "",
    uid: "",
  });
  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
