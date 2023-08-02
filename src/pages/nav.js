// nav.js
import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";

import './nav.css';

function Nav() {
  const [ searchtext, setSearchinput ] = useState("");
   function sendvalue(e){
   setSearchinput(e.target.value);}
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="nevigation">
      <div className="head">
       
      <Link to="/"><p>Sneaker World</p></Link>
      </div>
      <div className="search">
      <form>
        <input  className="mainsearch" type="search" name="search" value={searchtext} onChange={sendvalue}/>
        <Link to={`/Search/${searchtext}`}><button type="submit">Search</button></Link>
      </form>  
      </div>
        
     <div className="link">
       <nav>
          <ul className="nav_link">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Women">Women</Link>
           </li>*/}
            <li> 
            <Link to="/All">Explore</Link>
           </li>
           <li> 
            <Link to="/Cart">Cart</Link>
           </li>
           <li>
            <Link to="/Login">Login</Link>
           </li>
           {/* <li>
            <button onClick={logout}>Logout</button>
           </li> */}
          </ul>
        </nav>
     </div>
     
    </div>
  );
}

export default Nav;
