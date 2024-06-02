import Login from './pages/auth/Login'
import Unit from './pages/hr/unit/Unit'
import React, { useContext } from 'react'
import Navbar from './pages/layouts/Navbar'
import Register from './pages/auth/Register'
import AuthContext from './context/AuthContext'
import Dashboard from './pages/layouts/dashboard/Dashboard'
import Departments from './pages/hr/department/Departments'
import DepartmentDetails from './pages/hr/department/DepartmentDetails'
import DepartmentUpdate from './pages/hr/department/DepartmentUpdate'
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
                {loggedIn === true && (
                    <>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/departments' element={<Departments />} />
                        <Route path='/department/:id' element={<DepartmentDetails />} />
                        <Route path='/department/update/:id' element={<DepartmentUpdate />} />
                        {/* <Route path='/department/update/status/:id' element={<DepartmentUpdate />} /> */}
                        <Route path='/designation/list' element={<Designation />} />
                        <Route path='/unit/list' element={<Unit />} />
                        <Route path='*' element={<div>Page Not Found</div>} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )

}
export default Router
