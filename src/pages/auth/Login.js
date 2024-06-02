import axios from 'axios'
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


function Login() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const { getLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    

    async function login(e) {
        e.preventDefault();
        try {

            const registerData = { name, password }
            await axios.post('http://localhost:1337/api/v1/auth/login', registerData)
            await getLoggedIn()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input
                    type='text'
                    placeholder='enter your name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='password'
                    placeholder='enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
