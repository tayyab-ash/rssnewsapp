import React from "react";
import { useContext, useState } from "react";
import hdrstyles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import themeContext from "../Context/Theme/ThemeContext";

// Images
import logo from "./images/logo.png";
import logoDark from "./images/logo-dark.png";

function Header() {

  const mode = useContext(themeContext);
  const [header, setHeader] = useState(false)
  const [mTop, setmTop] = useState("")

  const body = document.body
  body.onscroll = ()=>{
    if (window.scrollY >= 0 && window.scrollY <= 20){
      setHeader(false)
      setmTop("")
    }
    else{
      setHeader(true)
      setmTop("mt-0")
    }
  }
  return (
    <div>
      <div className={``}>
        
      </div>

      <div className={`${hdrstyles.sticky} 
      ${header ? (mode.theme === "dark" ? hdrstyles.headerBgDark:hdrstyles.headerBgLight):""}
      g-0 d-flex justify-content-center `}>
      <div
        className={`${hdrstyles.new} ${mTop} container d-flex justify-content-between align-items-center`}
      >
        <div className={`${hdrstyles.logo} nav-item`}>
          <NavLink className="nav-link" to="/">
            {" "}
            <img
              src={mode.theme === "dark" ? logoDark : logo}
              alt=""
              width={"140px"}
            />{" "}
          </NavLink>
        </div>
        <div className={`${hdrstyles.items} d-flex`}>
          <i className={`${hdrstyles.menuico} fa-solid fa-bars`}></i>
          <ul
            className={`${hdrstyles.links}  d-flex align-items-center mb-0  `}
          >
            <li>
              <NavLink
                className={`${
                  mode.theme === "dark"
                    ? hdrstyles.textdark
                    : hdrstyles.textlight
                }`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${
                  mode.theme === "dark"
                    ? hdrstyles.textdark
                    : hdrstyles.textlight
                }`}
                to="/aboutus"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${
                  mode.theme === "dark"
                    ? hdrstyles.textdark
                    : hdrstyles.textlight
                }`}
                to="/contactus"
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={`${
                  mode.theme === "dark"
                    ? hdrstyles.textdark
                    : hdrstyles.textlight
                } dropdown-toggle`}
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Theme
              </NavLink>
              <ul
                className={`${hdrstyles[`dropdown-menu`]} ${
                  mode.theme === "dark" ? hdrstyles.bgdark : hdrstyles.bglight
                } dropdown-menu`}
              >
                <li className="p-0">
                  <span
                    onClick={mode.themeLight}
                    className={`
                    ${hdrstyles[`dropdown-item`]} 
                    ${
                      mode.theme === "dark"
                        ? hdrstyles.textdark
                        : (hdrstyles.textlight, hdrstyles.lightactive)
                    }
                    ${hdrstyles.hoverbgDark}
                    dropdown-item mb-1`}
                  >
                    Light
                  </span>
                </li>
                <li className="p-0">
                  <span
                    onClick={mode.themeDark}
                    className={`
                    ${hdrstyles[`dropdown-item`]} 
                    ${
                      mode.theme === "dark"
                        ? (hdrstyles.textdark, hdrstyles.darkactive)
                        : hdrstyles.textlight
                    }
                    ${hdrstyles.hoverbgLight}
                    dropdown-item`}
                  >
                    Dark
                  </span>
                </li>
              </ul>
            </li>

            <div className={`${hdrstyles.buttons}`}>
              <Link to="/login">
                <button
                  className={`${hdrstyles.loginbtn} ${
                    hdrstyles[mode.btnTheme]
                  }`}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className={`${hdrstyles.signupbtn} ${
                    hdrstyles[mode.btnTheme]
                  }`}
                >
                  Signup
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      </div>
    </div>
      
  );
}

export default Header;
