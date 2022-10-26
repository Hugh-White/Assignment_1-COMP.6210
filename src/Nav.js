
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className="navbar p-3 rounded border " style={{backgroundColor: "rgba(0,0,0,0.92)"}}>
            <h3 className="Display-3 navbar-brand text-white"><img src="images/SCPlogo.png" alt="Logo" style={{"max-width" : "45px", "height" : "auto" }}></img> SCP Foundation</h3>
           
                <ul className="nav nav-pills navbar-right " >
                <Link to="/" className='nav-link '>
                    <li className="nav-item text-white p-3"><h3>Home</h3></li>
                </Link>
                <Link to="/About" className='nav-link'>
                    <li className="nav-item text-white p-3"><h3>About</h3></li>
                </Link>
                <Link to='/Subjects' className='nav-link'>
                    <li className="nav-item text-white p-3"><h3>Subjects</h3></li>
                </Link>
                    
                </ul>
             {/* added hamburger toggle button */}
             <button className="navbar-toggler bg-light mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation" aria-expanded="false">
                    <span className="navbar-toggler-icon text-white"></span>
                </button> 
            {/* encased <ul> within the following div with our n_bar id */}
            <div className="collapse navbar-collapse" id="n_bar">
                <ul className='nav'>
                {/* Using normal html anchor tag syntax to link to individual SCP items*/}
                <li className="nav-item text-white "><h4><a href="#SCP-066" className="nav-link">SCP-066</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-071" className="nav-link">SCP-071</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-005" className="nav-link">SCP-005</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-077" className="nav-link">SCP-077</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-019" className="nav-link">SCP-019</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-049" className="nav-link">SCP-049</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-100" className="nav-link">SCP-100</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-105" className="nav-link">SCP-105</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-300" className="nav-link">SCP-300</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-004" className="nav-link">SCP-004</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-062" className="nav-link">SCP-062</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-021" className="nav-link">SCP-021</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-306" className="nav-link">SCP-306</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-051" className="nav-link">SCP-051</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-058" className="nav-link">SCP-058</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-014" className="nav-link">SCP-014</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-002" className="nav-link">SCP-002</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-003" className="nav-link">SCP-003</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-006" className="nav-link">SCP-006</a></h4></li>
                <li className="nav-item text-white "><h4><a href="#SCP-073" className="nav-link">SCP-073</a></h4></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
