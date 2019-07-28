import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
  
  <span className="navbar-brand mb-0 h1">Student App</span>
  
  <div>
    <div className="navbar-nav">
      <Link to='/' className="nav-item nav-link active" >List </Link>
      <Link to='/create' className="nav-item nav-link" href="#">Create</Link>
      
     
    </div>
  </div>
</nav>

    
    </div>
  );
}

export default Navbar;
