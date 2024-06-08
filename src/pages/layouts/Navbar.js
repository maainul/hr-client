import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutBtn from '../auth/LogoutBtn';
import AuthContext from '../../context/AuthContext'


function Navbar() {

    const { loggedIn } = useContext(AuthContext)

    return (
        <nav className='navbar'>
            {
                loggedIn === false && (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>)
            }
            {
                loggedIn === true && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/departments">Departments</Link>
                        <Link to="/divisions">Division</Link>
                        <Link to="/designations">Designation</Link>
                        <Link to="/units">Unit</Link>
                        <Link to="/groups">Groups</Link>
                        <LogoutBtn  />
                    </>
                )
            }
        </nav>
    );
}

export default Navbar