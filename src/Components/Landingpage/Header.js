import React from "react";
import hdrstyles from "./Header.module.css";
import logo from "./images/logo.png";
import logoDark from "./images/logo-dark.png";
import { NavLink, Link } from "react-router-dom";


import { useContext, useState } from "react";
import themeContext from "../Context/Theme/ThemeContext";

function Header() {
  const mode = useContext(themeContext);
  // const ac = mode.state.active
  return (
    <div>
      <div
        className={`${hdrstyles.new} container d-flex justify-content-between align-items-center`}
      >
        <div className={`${hdrstyles.logo} nav-item`}>
          <NavLink className="nav-link" to="/">
            {" "}
            <img src={logoDark} alt="" width={"140px"} />{" "}
          </NavLink>
        </div>
        <div className={`${hdrstyles.items} d-flex`}>
          <i class={`${hdrstyles.menuico} fa-solid fa-bars`}></i>
          <ul className={`${hdrstyles.links} d-flex align-items-center mb-0`}>
            <li>
              <NavLink className={`${hdrstyles.linkhover}`} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={`${hdrstyles.linkhover}`} to="/aboutus">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink className={`${hdrstyles.linkhover}`} to="/contactus">
                Contact us
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                className={`${hdrstyles.linkhover} dropdown-toggle`}
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Theme
              </a>
              <ul class={`${hdrstyles[`dropdown-menu`]} dropdown-menu`}>
                <li className="p-0">
                  <span
                    onClick={mode.themeLight}
                    class={`${hdrstyles[`dropdown-item`]} ${hdrstyles[mode.lightactive]} dropdown-item`}
                  >
                    Light
                  </span>
                </li>
                <li className="p-0">
                  <span 
                    onClick={mode.themeDark}
                    class={`${hdrstyles[`dropdown-item`]} ${hdrstyles[mode.darkactive]} dropdown-item`}>
                    Dark
                  </span>
                </li>
              </ul>
            </li>

            <div className={`${hdrstyles.buttons}`}>
              <Link to="/login">
                <button className={`${hdrstyles.loginbtn}`}>Login</button>
              </Link>
              <Link to="/signup">
                <button className={`${hdrstyles.signupbtn}`}>Signup</button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
