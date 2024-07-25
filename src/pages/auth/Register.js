import axios from 'axios'
import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './AuthForm.css'

function Register() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')
    const [message, setMessage] = useState('')
    const { getLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()



    async function register(e) {
        e.preventDefault();
        try {

            const registerData = { name, password, passwordVerify }
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}auth/register`, registerData)
            await getLoggedIn()
            navigate("/")
        } catch (error) {
            console.log(error)
            setMessage(error.response.data.error[0].message)
        }
    }

    return (

        <>
            <div className='hero'>
                <div className='form-box'>

                    <div className='button-box'>
                        <div className='btn'> </div>
                        <button type='button' className='toggle-btn'>Register</button>
                    </div>

                    <form onSubmit={register} className='input-group'>
                        <input
                            type='text'
                            placeholder='Enter Your User ID'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='input-field'
                        />
                        <p className='errorMessage'>{message}</p>
                        <input
                            type='password'
                            placeholder='Enter Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='input-field'
                        />
                        <input
                            type='password'
                            placeholder='Enter Confirm Password'
                            onChange={(e) => setPasswordVerify(e.target.value)}
                            value={passwordVerify}
                            className='input-field'
                        />

                        <button type='submit' className='submit-btn'>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
