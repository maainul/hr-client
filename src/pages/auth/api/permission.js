import axios from "axios"

// Fetch All Permission List
async function fetchPermissions() {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/permission/list`)
    } catch (error) {
        console.log(error)
    }

}