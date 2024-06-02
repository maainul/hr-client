import React, { useContext } from 'react'
import Login from './pages/auth/Login'
import Navbar from './pages/layouts/Navbar'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from './context/AuthContext'


function Router() {

    const { loggedIn } = useContext(AuthContext)


    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {
                    loggedIn === false && (
                        <>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </>

                    )
                }
                {loggedIn === true} && (
                <>
                    <Route path='/' element={<div> Home </div>} />
                    <Route path='/department/list' element={<div> Department </div>} />
                </>
                )
            </Routes>
        </BrowserRouter>
    )

}
export default Router
