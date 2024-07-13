import { useContext, useEffect, useState } from "react"
import AuthContext from "../../context/AuthContext"
import axios from "axios"

function Profile() {

    const { userID } = useContext(AuthContext)
    const [profileInfo, setProfileInfo] = useState({})

    useEffect(() => {
        async function getProfileInfo() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/profile/${userID}`)
                console.log(res.data.data)
                setProfileInfo(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProfileInfo()
    }, [userID])
    return (
        <>
            <><h1>PROFILE</h1></>
            <p>{profileInfo.name}</p>
            <p>{profileInfo.group && profileInfo.group.map((group, index) => (
                <div key={index}>
                    <h2>Group Info</h2>
                    <h3>Name : {group.name}</h3>
                    <h3>Code : {group.code}</h3>
                    <ul>
                        {group.permissions.map((per, ix) => (
                            <li key={ix}>Resource: {per.resource}, Action:{per.action}</li>
                        ))}
                    </ul>
                </div>
            ))}</p>
        </>
    )
}

export default Profile