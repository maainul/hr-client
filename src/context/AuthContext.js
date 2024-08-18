import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [userID, setUserID] = useState(null);
  const [userGroup, setUserGroup] = useState(null);

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}auth/loggedin`
      );
      setLoggedIn(loggedInRes.data.loggedIn);
      setUserID(loggedInRes.data.userId);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  }

  async function fetchData(userID) {
    if (userID) {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}auth/profile/${userID}`
      );
      setUserGroup(res.data.data.group[0].code);
    }
  }

  useEffect(() => {
    getLoggedIn();
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, userID, userGroup, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
