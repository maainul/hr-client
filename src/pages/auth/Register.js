import React, { useState } from 'react'
import axios from 'axios'


function Register() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')

    async function register(e) {
        e.preventDefault();
        try {

            const registerData = { name, password, passwordVerify }
            await axios.post('http://localhost:1337/api/v1/auth/register', registerData)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Register new User</h1>
            <form onSubmit={register}>
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
                <input
                    type='password'
                    placeholder='enter your password'
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    value={passwordVerify}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
