import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    const [userID, setUserID] = useState(undefined);
    const [userPermissions, setUserPermissions] = useState([])
    const [userMenus, setUserMenus] = useState([])

    async function getLoggedIn() {
        const loggedInRes = await axios.get('http://localhost:1337/api/v1/auth/loggedin');
        setLoggedIn(loggedInRes.data.loggedIn);
        setUserID(loggedInRes.data.userId);

        if (loggedInRes.data.loggedIn) {
            //Fetch the user Profile to get permission
            const userRes = await axios.get(`http://localhost:1337/api/v1/auth/profile/${loggedInRes.data.userId}`);
            const user = userRes.data.data
            const permissions = user.group.flatMap(group => group.permissions)
            setUserPermissions(permissions)
        }
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn, userID, userPermissions }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };
