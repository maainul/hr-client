import axios from "axios"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import AuthContext from "../../context/AuthContext"


function LogoutBtn() {

    const { getLoggedIn } = useContext(AuthContext)

    const navigate = useNavigate()

    async function logout() {
        await axios.get('http://localhost:1337/api/v1/auth/logout')
        await getLoggedIn()
        navigate("/")
    }

    return (
        <button onClick={logout} className='button'> <i class="ri-logout-circle-line text-red-400 text-4xl hover:text-red-500 hover:cursor-pointer "></i></button>
    )
}

export default LogoutBtn