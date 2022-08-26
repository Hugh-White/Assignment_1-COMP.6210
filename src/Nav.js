
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className="navbar bg-dark p-3 ">
            <h3 className="Display-3 navbar-brand text-white "><img src="images/SCPlogo.png" style={{"max-width" : "40px", "height" : "auto" }}></img> SCP Foundation   </h3>
            <ul className="nav nav-pills navbar-right">
            <Link to="/" className='nav-link'>
                <li className="nav-item text-white"><h4>Home</h4></li>
            </Link>
            <Link to="/About" className='nav-link'>
                <li className="nav-item text-white"><h4>About</h4></li>
            </Link>
            <Link to='/Subjects' className='nav-link'>
                <li className="nav-item text-white"><h4>Subjects</h4></li>
            </Link>
            </ul>
        </nav>
    );
}

export default Nav;