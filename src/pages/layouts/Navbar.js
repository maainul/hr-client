import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutBtn from '../auth/LogoutBtn';
import AuthContext from '../../context/AuthContext'

function Navbar() {
    const { loggedIn, userPermissions } = useContext(AuthContext);


    const hasPermission = (resource, action) => {
        let hasPermission = false
        for (let permission of userPermissions) {
            if (permission.resource === resource && permission.action === action) {
                hasPermission = true
                break
            }
        }
        return hasPermission
    }




    return (
        <nav className='navbar'>
            {!loggedIn && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
            {loggedIn && (
                <>
                    <Link to="/">Home</Link>

                    {hasPermission('employee', 'list') && <Link to="/employee">Employee</Link>}
                    {hasPermission('department', 'list') && <Link to="/departments">Departments</Link>}
                    {hasPermission('division', 'list') && <Link to="/division">Division</Link>}
                    {hasPermission('designation', 'list') && <Link to="/designations">Designation</Link>}
                    {hasPermission('unit', 'list') && <Link to="/units">Unit</Link>}
                    {hasPermission('group', 'list') && <Link to="/groups">Groups</Link>}
                    {hasPermission('salaryGrade', 'list') && <Link to="/salary-grade">Salary Grade</Link>}
                    {hasPermission('promotionAndIncrement', 'list') && <Link to="/promotion-and-increment">Promotion And Increment</Link>}
                    {hasPermission('policy', 'list') && <Link to="/policy">Policy</Link>}
                    {hasPermission('employeeSalary', 'list') && <Link to="/employee-salary">Employee Salary</Link>}
                    {hasPermission('employeePolicy', 'list') && <Link to="/employee-policy">Employee Policy</Link>}
                    {hasPermission('document', 'list') && <Link to="/document">Document</Link>}

                    <LogoutBtn />
                </>
            )}
        </nav>
    );
}

export default Navbar;
