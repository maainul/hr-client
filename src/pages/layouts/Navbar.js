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

                    {hasPermission('department', 'list') && <Link to="/departments">Departments</Link>}
                    {hasPermission('division', 'list') && <Link to="/division">Division</Link>}
                    {hasPermission('designation', 'list') && <Link to="/designations">Designation</Link>}
                    {hasPermission('units', 'list') && <Link to="/units">Unit</Link>}
                    {hasPermission('group', 'list') && <Link to="/groups">Groups</Link>}

                    <LogoutBtn />
                </>
            )}
        </nav>
    );
}

export default Navbar;
