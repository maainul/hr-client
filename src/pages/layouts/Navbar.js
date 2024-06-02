import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext'
import LogoutBtn from '../auth/LogoutBtn';

function Navbar() {

    const { loggedIn } = useContext(AuthContext)
    console.log(loggedIn)

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
                        <LogoutBtn />
                    </>
                )
            }
        </nav>
    );
}

export default Navbar