import Login from './pages/auth/Login'
import Unit from './pages/hr/unit/Unit'
import React, { useContext } from 'react'
import Navbar from './pages/layouts/Navbar'
import Register from './pages/auth/Register'
import AuthContext from './context/AuthContext'
import Department from './pages/hr/department/Department'
import Designation from './pages/hr/designation/Designation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
                    <Route path='/department/list' element={<Department />} />
                    <Route path='/designation/list' element={<Designation />} />
                    <Route path='/unit/list' element={<Unit />} />
                </>
                )
            </Routes>
        </BrowserRouter>
    )

}
export default Router
