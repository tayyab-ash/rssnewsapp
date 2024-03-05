import React from "react";
import hdrstyles from "./Header.module.css";
import logo from "./images/Black and White Monogram Business Logo.png";
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div
        className={`${hdrstyles.new} container d-flex justify-content-between align-items-center`}
      >
        <div className={`${hdrstyles.logo} nav-item`}>
         <NavLink className="nav-link" to="/"> <img src={logo} alt="" width={"140px"} /> </NavLink>
        </div>
        <div className={`${hdrstyles.items} d-flex justify-content-end `}>
          <ul className={` ${hdrstyles.links} d-flex align-items-center mb-0`}>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/aboutus">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/contactus">Contact us</NavLink>
            </li>
            <li>
              <a href="/">Premium</a>
            </li>
            <li className={`${hdrstyles.buttons}`}>
            <Link to="/login"><button className={`${hdrstyles.loginbtn}`}>Login</button></Link>
             <Link to="/signup"><button className={`${hdrstyles.signupbtn}`}>Signup</button></Link>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
