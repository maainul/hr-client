import axios from "axios"

// Fetch All Permission List
async function fetchPermissions() {
    try {
        const res = await axios.get('http://localhost:1337/api/v1/auth/permission/list')
    } catch (error) {
        console.log(error)
    }

}