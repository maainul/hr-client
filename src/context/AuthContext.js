import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    const [userID, setUserID] = useState(undefined);

    async function getLoggedIn() {
        const loggedInRes = await axios.get('http://localhost:1337/api/v1/auth/loggedin');
        setLoggedIn(loggedInRes.data.loggedIn);
        setUserID(loggedInRes.data.userId);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn, userID }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };
