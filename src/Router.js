import Login from './pages/auth/Login'
import Unit from './pages/hr/unit/Unit'
import React, { useContext } from 'react'
import Navbar from './pages/layouts/Navbar'
import Register from './pages/auth/Register'
import AuthContext from './context/AuthContext'
import Dashboard from './pages/layouts/dashboard/Dashboard'
import Departments from './pages/hr/department/Departments'
import Designations from './pages/hr/designation/Designations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DepartmentUpdate from './pages/hr/department/DepartmentUpdate'
import DepartmentDetails from './pages/hr/department/DepartmentDetails'
import DesignationUpdate from './pages/hr/designation/DepartmentUpdate'
import DesignationDetails from './pages/hr/designation/DesignationDetails'
import DepartmentStatusUpdate from './pages/hr/department/DepartmentStatusUpdate'
import DesignationStatusUpdate from './pages/hr/designation/DesignationStatusUpdate'


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

                        {/* Department */}
                        <Route path='/departments' element={<Departments />} />
                        <Route path='/department/:id' element={<DepartmentDetails />} />
                        <Route path='/department/update/:id' element={<DepartmentUpdate />} />
                        <Route path='/department/update/status/:id' element={<DepartmentStatusUpdate />} />

                        {/* Designation */}
                        <Route path='/designations' element={<Designations />} />
                        <Route path='/designation/:id' element={<DesignationDetails />} />
                        <Route path='/designation/update/:id' element={<DesignationUpdate />} />
                        <Route path='/designation/update/status/:id' element={<DesignationStatusUpdate />} />

                        {/* Unit */}
                        <Route path='/unit/list' element={<Unit />} />
                        <Route path='*' element={<div>Page Not Found</div>} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )

}
export default Router
