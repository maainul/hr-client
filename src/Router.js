import Login from './pages/auth/Login'
import React, { useContext } from 'react'
import Units from './pages/hr/unit/Units'
import Navbar from './pages/layouts/Navbar'
import Register from './pages/auth/Register'
import AuthContext from './context/AuthContext'
import UnitUpdate from './pages/hr/unit/UnitUpdate'
import UnitDetails from './pages/hr/unit/UnitDetails'
import Departments from './pages/hr/department/Departments'
import Dashboard from './pages/layouts/dashboard/Dashboard'
import Designations from './pages/hr/designation/Designations'
import UnitStatusUpdate from './pages/hr/unit/UnitStatusUpdate'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DepartmentUpdate from './pages/hr/department/DepartmentUpdate'
import DepartmentDetails from './pages/hr/department/DepartmentDetails'
import DesignationUpdate from './pages/hr/designation/DepartmentUpdate'
import DesignationDetails from './pages/hr/designation/DesignationDetails'
import DepartmentStatusUpdate from './pages/hr/department/DepartmentStatusUpdate'
import DesignationStatusUpdate from './pages/hr/designation/DesignationStatusUpdate'
import Divisions from './pages/hr/division/Divisions'
import DivisionDetails from './pages/hr/division/DivisionDetails'
import DivisionUpdate from './pages/hr/division/DivisionUpdate'
import DivisionStatusUpdate from './pages/hr/division/DivisionStatusUpdate'


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
                        <Route path='/units' element={<Units />} />
                        <Route path='/unit/:id' element={<UnitDetails />} />
                        <Route path='/unit/update/:id' element={<UnitUpdate />} />
                        <Route path='/unit/update/status/:id' element={<UnitStatusUpdate />} />

                        {/* Division */}
                        <Route path='/divisions' element={<Divisions />} />
                        <Route path='/division/:id' element={<DivisionDetails />} />
                        <Route path='/division/update/:id' element={<DivisionUpdate />} />
                        <Route path='/division/update/status/:id' element={<DivisionStatusUpdate />} />

                        <Route path='*' element={<div>Page Not Found</div>} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )

}
export default Router
