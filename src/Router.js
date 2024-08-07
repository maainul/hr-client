import React, { useContext } from "react";
import Units from "./pages/hr/unit/Units";
import Profile from "./pages/auth/Profile";
import Groups from "./pages/auth/group/Groups";
import AuthContext from "./context/AuthContext";
import AuthPage from "./pages/layouts/AuthPage";
import { Routes, Route } from "react-router-dom";
import Policies from "./pages/hr/policy/Policies";
import UnitUpdate from "./pages/hr/unit/UnitUpdate";
import Employees from "./pages/hr/employee/Employees";
import UnitDetails from "./pages/hr/unit/UnitDetails";
import Divisions from "./pages/hr/division/Divisions";
import GroupUpdate from "./pages/auth/group/GroupUpdate";
import PolicyUpdate from "./pages/hr/policy/PolicyUpdate";
import GroupDetails from "./pages/auth/group/GroupDetails";
import Departments from "./pages/hr/department/Departments";
import PolicyDetails from "./pages/hr/policy/PolicyDetails";
import Designations from "./pages/hr/designation/Designations";
import SalaryGrades from "./pages/hr/salaryGrade/SalaryGrades";
import DivisionUpdate from "./pages/hr/division/DivisionUpdate";
import UnitStatusUpdate from "./pages/hr/unit/UnitStatusUpdate";
import EmployeeUpdate from "./pages/hr/employee/EmployeeUpdate";
import EmployeeDetails from "./pages/hr/employee/EmployeeDetails";
import DivisionDetails from "./pages/hr/division/DivisionDetails";
import DepartmentUpdate from "./pages/hr/department/DepartmentUpdate";
import PolicyStatusUpdate from "./pages/hr/policy/PolicyStatusUpdate";
import DesignationUpdate from "./pages/hr/designation/DepartmentUpdate";
import DepartmentDetails from "./pages/hr/department/DepartmentDetails";
import SalaryGradeUpdate from "./pages/hr/salaryGrade/SalaryGradeUpdate";
import DesignationDetails from "./pages/hr/designation/DesignationDetails";
import SalaryGradeDetails from "./pages/hr/salaryGrade/SalaryGradeDetails";
import DivisionStatusUpdate from "./pages/hr/division/DivisionStatusUpdate";
import EmployeeStatusUpdate from "./pages/hr/employee/EmployeeStatusUpdate";
import DepartmentStatusUpdate from "./pages/hr/department/DepartmentStatusUpdate";
import DesignationStatusUpdate from "./pages/hr/designation/DesignationStatusUpdate";
import SalaryGradeStatusUpdate from "./pages/hr/salaryGrade/SalaryGradeStatusUpdate";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./pages/layouts/MainLayout";
import NoSidebarLayout from "./pages/layouts/NoSidebarLayout";
import WithSidebarLayout from "./pages/layouts/WithSidebarLayout";
import Menus from "./pages/hr/menu/Menus";
import MenuDetails from "./pages/hr/menu/MenuDetails";
import MenuUpdate from "./pages/hr/menu/MenuUpdate";
import Users from "./pages/auth/users/Users";
import UserForm from "./pages/auth/users/UserForm";
import EmployeeForm from "./pages/hr/employee/EmployeeForm";
import LeaveTypes from "./pages/hr/leaveType/LeaveTypes";
import LeaveTypeDetails from './pages/hr/leaveType/LeaveTypeDetails';
import LeaveTypeUpdate from './pages/hr/leaveType/LeaveTypeUpdate';
import EmployeeLeaves from './pages/hr/employeeLeave/EmployeeLeaves';
import EmployeeLeaveDetails from './pages/hr/employeeLeave/EmployeeLeaveDetails';
import EmployeeLeaveUpdate from "./pages/hr/employeeLeave/EmployeeLeaveUpdate";
import EmployeeLeaveBalances from './pages/hr/employeeLeaveBalance/EmployeeLeaveBalances';

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {!loggedIn && (
          <Route element={<NoSidebarLayout />}>
            <Route path="/" element={<AuthPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        )}
        {loggedIn && (
          <Route element={<WithSidebarLayout />}>
            <Route path="/" element={<MainLayout />} />

            {/* Department */}
            <Route path="/departments" element={<Departments />} />
            <Route path="/department/:id" element={<DepartmentDetails />} />
            <Route
              path="/department/update/:id"
              element={<DepartmentUpdate />}
            />
            <Route
              path="/department/update/status/:id"
              element={<DepartmentStatusUpdate />}
            />

            {/* Designation */}
            <Route path="/designations" element={<Designations />} />
            <Route path="/designation/:id" element={<DesignationDetails />} />
            <Route
              path="/designation/update/:id"
              element={<DesignationUpdate />}
            />
            <Route
              path="/designation/update/status/:id"
              element={<DesignationStatusUpdate />}
            />

            {/* Unit */}
            <Route path="/units" element={<Units />} />
            <Route path="/unit/:id" element={<UnitDetails />} />
            <Route path="/unit/update/:id" element={<UnitUpdate />} />
            <Route
              path="/unit/update/status/:id"
              element={<UnitStatusUpdate />}
            />

            {/* Division */}
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/division/:id" element={<DivisionDetails />} />
            <Route path="/division/update/:id" element={<DivisionUpdate />} />
            <Route
              path="/division/update/status/:id"
              element={<DivisionStatusUpdate />}
            />

            {/* Groups */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/group/:id" element={<GroupDetails />} />
            <Route path="/group/update/:id" element={<GroupUpdate />} />

            {/* SalaryGrade */}
            <Route path="/salary-grade" element={<SalaryGrades />} />
            <Route path="/salary-grade/:id" element={<SalaryGradeDetails />} />
            <Route
              path="/salary-grade/update/:id"
              element={<SalaryGradeUpdate />}
            />
            <Route
              path="/salary-grade/status/:id"
              element={<SalaryGradeStatusUpdate />}
            />

            {/* Policy */}
            <Route path="/policy" element={<Policies />} />
            <Route path="/policy/:id" element={<PolicyDetails />} />
            <Route path="/policy/update/:id" element={<PolicyUpdate />} />
            <Route
              path="/policy/update/status/:id"
              element={<PolicyStatusUpdate />}
            />

            {/* Employee */}
            <Route path="/employee" element={<Employees />} />
            <Route path="/employee/add" element={<EmployeeForm />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
            <Route path="/employee/update/:id" element={<EmployeeUpdate />} />
            <Route
              path="/employee/update/status/:id"
              element={<EmployeeStatusUpdate />}
            />

            {/* Menu */}
            <Route path="/menu" element={<Menus />} />
            <Route path="/menu/:id" element={<MenuDetails />} />
            <Route path="/menu/update/:id" element={<MenuUpdate />} />

            {/* Users */}
            <Route path="/users" element={<Users />} />
            <Route path="/user/create" element={<UserForm />} />
            <Route path="*" element={<div>Page Not Found</div>} />

            {/* Leave Type */}
            <Route path="/leave-type" element={<LeaveTypes />} />
            <Route path="/leave-type/:id" element={<LeaveTypeDetails />} />
            <Route path="/leave-type/update/:id" element={<LeaveTypeUpdate />} />

            {/* Leave Type */}
            <Route path="/employee-leave" element={<EmployeeLeaves />} />
            <Route path="/leave-type/:id" element={<EmployeeLeaveDetails />} />
            <Route path="/leave-type/update/:id" element={<EmployeeLeaveUpdate />} />

            <Route path="/employee-leave-balance" element={<EmployeeLeaveBalances />} />

          </Route>
        )}
      </Routes>
    </>
  );
}
export default Router;
