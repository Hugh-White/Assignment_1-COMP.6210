import Nav from './Nav';
import About from './About';
import Subjects from './Subjects';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Subjects" element={<Subjects />} />
        </Routes>
    </Router>
  );
}

function Home()
{
  return(
    <div className='mt-3 p-3 rounded border shadow text-white' style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
  <p><h1 className='Display-1 text-white'>Home</h1>
  <h2>Welcome to the SCP Foundation Home Page.</h2>
  <h4>Please use the above Menu to navigate our current subjects and containment procedures.<br></br>Stay safe in the field agents!<br></br><br></br>
  <b><i>- The Administrator</i></b></h4>
  </p>
  </div>
  
  );
}

export default App;
