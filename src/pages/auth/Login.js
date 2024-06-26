import './AuthForm.css';
import axios from 'axios'
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const { getLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()


    async function login(e) {
        e.preventDefault();
        try {
            const registerData = { name, password }
            const res = await axios.post('http://localhost:1337/api/v1/auth/login', registerData)
            console.log(res)
            await getLoggedIn()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='hero'>
                <div className='form-box'>
                    <div className='button-box'>
                        <div className='btn'> </div>
                        <button type='button' className='toggle-btn'>Login</button>
                        <Link className='toggle-btn-reg' to="/register" >Register</Link>
                    </div>

                    <form onSubmit={login} className='input-group'>
                        <input
                            type='text'
                            placeholder='Enter Your User ID'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='input-field'
                        />
                        <p></p>
                        <input
                            type='password'
                            placeholder='Enter Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='input-field'
                        />
                        <button type='submit' className='submit-btn'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
