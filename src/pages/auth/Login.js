import './AuthForm.css';
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
        <div className='form-box'>
            <div className='button-box'>
                <div className='btn'> </div>
                <button type='button' className='toggle-btn'>Login</button>
                <button type='button' className='toggle-btn'>Register</button>
            </div>


            <form onSubmit={login} className='input-group'>
                <input
                    type='text'
                    placeholder='enter your name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='input-field'
                />
                <input
                    type='password'
                    placeholder='enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='input-field'
                />

                <button type='submit' className='submit-btn'>Login</button>
            </form>
        </div>
    )
}

export default Login


// https://www.youtube.com/watch?v=L5WWrGMsnpw&ab_channel=GreatStack