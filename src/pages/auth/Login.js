import './AuthForm.css';
import axios from 'axios'
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState([])
    const { getLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()


    async function login(e) {
        e.preventDefault();
        try {
            const registerData = { name, password }
            const res = await axios.post('http://localhost:1337/api/v1/auth/login', registerData)
            await getLoggedIn()
            navigate("/")
        } catch (error) {
            setErrorMessage(error.response.data.error)
        }
    }

    return (
        <>
            <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-gray-200 hover:shadow-2xl'>
                <div className='mx-auto bg-white flex flex-col w-[480px] p-10 rounded-lg my-auto'>
                    <form onSubmit={login} className='input-group'>
                        <div className='mb-5'>
                            <input
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="User ID"
                                className="input_sm mt-10 "
                            />
                            {errorMessage.some(error => error.label === 'name' || error.label === 'userNotFound') && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errorMessage.find(error => error.label === 'name' || error.label === 'userNotFound' || error.label === 'wrongCred').message}
                                </div>
                            )}
                        </div>
                        <div className='mb-5'>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="input_sm"
                            />
                            {errorMessage.some(error => error.label === 'password' || error.label === 'wrongCred') && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errorMessage.find(error => error.label === 'password' || error.label === 'wrongCred').message}
                                </div>
                            )}
                        </div>
                        <div className="text-center mb-5">
                            <button type='submit' className='btn_sm'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
