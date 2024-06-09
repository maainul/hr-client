import Login from './pages/auth/Login'
import React, { useContext } from 'react'
import Units from './pages/hr/unit/Units'
import Profile from './pages/auth/Profile'
import Navbar from './pages/layouts/Navbar'
import Register from './pages/auth/Register'
import Groups from './pages/auth/group/Groups'
import AuthContext from './context/AuthContext'
import Policies from './pages/hr/policy/Policies'
import UnitUpdate from './pages/hr/unit/UnitUpdate'
import Divisions from './pages/hr/division/Divisions'
import UnitDetails from './pages/hr/unit/UnitDetails'
import GroupUpdate from './pages/auth/group/GroupUpdate'
import PolicyUpdate from './pages/hr/policy/PolicyUpdate'
import GroupDetails from './pages/auth/group/GroupDetails'
import Dashboard from './pages/layouts/dashboard/Dashboard'
import Departments from './pages/hr/department/Departments'
import PolicyDetails from './pages/hr/policy/PolicyDetails'
import Designations from './pages/hr/designation/Designations'
import SalaryGrades from './pages/hr/salaryGrade/SalaryGrades'
import DivisionUpdate from './pages/hr/division/DivisionUpdate'
import UnitStatusUpdate from './pages/hr/unit/UnitStatusUpdate'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DivisionDetails from './pages/hr/division/DivisionDetails'
import PolicyStatusUpdate from './pages/hr/policy/PolicyStatusUpdate'
import DepartmentUpdate from './pages/hr/department/DepartmentUpdate'
import DepartmentDetails from './pages/hr/department/DepartmentDetails'
import DesignationUpdate from './pages/hr/designation/DepartmentUpdate'
import SalaryGradeUpdate from './pages/hr/salaryGrade/SalaryGradeUpdate'
import DesignationDetails from './pages/hr/designation/DesignationDetails'
import SalaryGradeDetails from './pages/hr/salaryGrade/SalaryGradeDetails'
import DivisionStatusUpdate from './pages/hr/division/DivisionStatusUpdate'
import DepartmentStatusUpdate from './pages/hr/department/DepartmentStatusUpdate'
import DesignationStatusUpdate from './pages/hr/designation/DesignationStatusUpdate'
import SalaryGradeStatusUpdate from './pages/hr/salaryGrade/SalaryGradeStatusUpdate'



function Router() {

    const { loggedIn } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {
                    !loggedIn && (
                        <>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </>
                    )
                }
                {loggedIn && (
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

                        {/* Groups */}
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/groups' element={<Groups />} />
                        <Route path='/group/:id' element={<GroupDetails />} />
                        <Route path='/group/update/:id' element={<GroupUpdate />} />


                        {/* SalaryGrade */}
                        <Route path='/salary-grade' element={<SalaryGrades />} />
                        <Route path='/salary-grade/:id' element={<SalaryGradeDetails />} />
                        <Route path='/salary-grade/update/:id' element={<SalaryGradeUpdate />} />
                        <Route path='/salary-grade/status/:id' element={<SalaryGradeStatusUpdate />} />


                        {/* Policy */}
                        <Route path='/policy' element={<Policies />} />
                        <Route path='/policy/:id' element={<PolicyDetails />} />
                        <Route path='/policy/update/:id' element={<PolicyUpdate />} />
                        <Route path='/policy/update/status/:id' element={<PolicyStatusUpdate />} />


                        <Route path='*' element={<div>Page Not Found</div>} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )

}
export default Router
