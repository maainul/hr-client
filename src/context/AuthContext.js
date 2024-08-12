import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [userID, setUserID] = useState(null);
  const [userGroup, setUserGroup] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedInRes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}auth/loggedin`
        );
        setLoggedIn(loggedInRes.data.loggedIn);
        setUserID(loggedInRes.data.userId);

        if (loggedInRes.data.userId) {
          const res = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}auth/profile/${loggedInRes.data.userId}`
          );
          setUserGroup(res.data.data.group[0].code);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, userID, userGroup }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
