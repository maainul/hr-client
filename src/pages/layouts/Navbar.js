import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoutBtn from '../auth/LogoutBtn';
import AuthContext from '../../context/AuthContext'


function Navbar() {

    const { loggedIn } = useContext(AuthContext)

    return (
        <nav>
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
                        <Link to="/department/list">Departments</Link>
                        <Link to="/division/list">Division</Link>
                        <Link to="/designation/list">Designation</Link>
                        <Link to="/unit/list">Unit</Link>
                        <LogoutBtn />
                    </>
                )
            }
        </nav>
    );
}

export default Navbar