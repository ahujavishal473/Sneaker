// nav.js
import React from "react";
import '../App.css';
import { Link,useNavigate } from "react-router-dom";

import './nav.css';

function Nav() {
  

   const isAuthenticated = !!localStorage.getItem('token');
   const navigate = useNavigate();
 
   const handleLogout = () => {
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     
     navigate('/');
     alert("you are logout")
   };
  return (
    <div className="nevigation">
      <div className="head">
       
      <Link to="/" className="logo"><p>Sneaker World</p></Link>
      </div>
     
        
     <div className="link">
       <nav>
          <ul className="nav_link">
            <li>
              <Link to="/">Home</Link>
            </li>
          
            <li> 
            <Link to="/All">Explore</Link>
           </li>
           <li> 
            <Link to="/Cart">Cart</Link>
           </li>
           {isAuthenticated ? (
        
        <button className="logout" type="submit" onClick={handleLogout}>Logout</button>
      ) : (
        
        <>
      
          <li><Link to="/signin">Sign In</Link></li>
          
        </>
      )}
           
          </ul>
        </nav>
     </div>
     
    </div>
  );
}

export default Nav;
