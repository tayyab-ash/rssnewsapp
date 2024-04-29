import React from "react";
import { useContext, useState } from "react";
import hdrstyles from "./Header.module.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import themeContext from "../Context/Theme/ThemeContext";

// Images
import logo from "./images/logo.png";
import logoDark from "./images/logo-dark.png";

function Header() {
  const mode = useContext(themeContext);
  const [header, setHeader] = useState(false);

  const [mTop, setmTop] = useState("");
  const [navShow, setnavShow] = useState("navHidden");
  const [showItems, setshowItems] = useState("");
  const [areaExp, setareaExp] = useState(false);

// eslint-disable-next-line
  const [activeItem, setactiveItem] = useState('/')
  const location = useLocation()


  const mobileNav = () => {
    console.log("heheheheh");
    if (navShow === "navHidden") {
      setnavShow("navShow");
    } else {
      setnavShow("navHidden");
    }
  };

  const colapseTheme = () => {
    if (showItems === "") {
      setshowItems("show");
      setareaExp(true);
    } else {
      setshowItems("");
      setareaExp(false);
    }
  };

  //This function hides the mobile navigation menu when clicked on the body
  const handleBodyClick = (event) => {
    const navico = document.getElementById('navIco');
    const mobnav = document.getElementById('mobNav');
    if (navico && !navico.contains(event.target) && !mobnav.contains(event.target) ) {
    // if (!mobnav.contains(event.target) ) {
      setnavShow("navHidden");
    }
  };
  document.body.addEventListener("click", handleBodyClick);

  const body = document.body;
  body.onscroll = () => {
    if (window.scrollY >= 0 && window.scrollY <= 20) {
      setHeader(false);
      setmTop("");
    } else {
      setHeader(true);
      setmTop("mt-0");
    }
  };

  return (
    <div>
      <div
        id="mobNav"
        className={`${hdrstyles.mobilenav} ${hdrstyles[navShow]}`}
      >
        <div
          className={`${hdrstyles.mobilenav2} container ${
            mode.theme === "dark" ? hdrstyles.mobileNavDark : ""
          } `}
        >
          <div onClick={mobileNav} className={`${hdrstyles.mobileNavIcondiv}`}>
      
            <i className={`${hdrstyles.mobileNavIcon} ${mode.theme === "dark"? hdrstyles.mobileNavIconDark:""} fa-solid fa-xmark ${hdrstyles[`fa-xmark`]}`}></i>
         
            
          </div>
          <div className={`${hdrstyles.mobileNavItems}`}>
            <ul className={``}>
              <li>
                <NavLink
                  className={`${
                    mode.theme === "dark"
                      ? hdrstyles.textdark
                      : hdrstyles.textlight
                  } ${location.pathname === '/'? (mode.theme === "dark"? hdrstyles.activeMobNavDark:hdrstyles.activeMobNavLight):""}`}
                  to="/"
                  onClick={()=>setactiveItem('/')}
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
                  } ${location.pathname === '/aboutus'? (mode.theme === "dark"? hdrstyles.activeMobNavDark:hdrstyles.activeMobNavLight):""}`}
                  to="/aboutus"
                  onClick={()=>setactiveItem('/aboutus')}
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
                  } ${location.pathname === '/contactus'? (mode.theme === "dark"? hdrstyles.activeMobNavDark:hdrstyles.activeMobNavLight):""}`}
                  to="/contactus"
                  onClick={()=>setactiveItem('/contactus')}
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  aria-expanded={areaExp}
                  className={`d-flex justify-content-between align-items-center dropdown-toggle ${
                    mode.theme === "dark"
                      ? hdrstyles.textdark
                      : hdrstyles.textlight
                  }`}
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseItems"
                  onClick={colapseTheme}
                >
                  Theme
                </NavLink>
                <ul
                  id="collapseItems"
                  className={`${hdrstyles.mobileNavTheme}  collapse ${showItems}`}
                >
                  <li>
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
                    dropdown-item m-0`}
                    >
                      Light
                    </span>
                  </li>
                  <li>
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
                    dropdown-item m-0`}
                    >
                      Dark
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/login"
                  className={`${
                    mode.theme === "dark"
                      ? hdrstyles.textdark
                      : hdrstyles.textlight
                  } ${location.pathname === '/login'? (mode.theme === "dark"? hdrstyles.activeMobNavDark:hdrstyles.activeMobNavLight):""}`}
                  onClick={()=>setactiveItem('/login')}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup"
                  className={`${
                    mode.theme === "dark"
                      ? hdrstyles.textdark
                      : hdrstyles.textlight
                  } ${location.pathname === '/signup'? (mode.theme === "dark"? hdrstyles.activeMobNavDark:hdrstyles.activeMobNavLight):""}`}
                  onClick={()=>setactiveItem('/signup')}
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`${hdrstyles.sticky} 
      ${
        header
          ? mode.theme === "dark"
            ? hdrstyles.headerBgDark
            : hdrstyles.headerBgLight
          : ""
      }
      g-0 d-flex justify-content-center`}
      >
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
            <div onClick={mobileNav} id="navIco" >
              <i
                className={`${hdrstyles.menuico} ${mode.theme === "dark"? hdrstyles.menuIconDark:""}  fa-solid fa-bars`}
              ></i>
            </div>

            <ul
              className={`${hdrstyles.links}  d-flex align-items-center mb-0  `}
            >
              <li>
                <NavLink
                  className={`${
                    mode.theme === "dark"
                      ? hdrstyles.textdark
                      : hdrstyles.textlight
                  } ${location.pathname === '/'? (mode.theme === "dark"? hdrstyles.activeDark:hdrstyles.activeLight):""}`}
                  to="/"
                  onClick={()=>setactiveItem('/')}
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
                  } ${location.pathname === '/aboutus'? (mode.theme === "dark"? hdrstyles.activeDark:hdrstyles.activeLight):""}`}
                  to="/aboutus"
                  onClick={()=>setactiveItem('/aboutus')}
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
                  } ${location.pathname === '/contactus'? (mode.theme === "dark"? hdrstyles.activeDark:hdrstyles.activeLight):""}`}
                  to="/contactus"
                  onClick={()=>setactiveItem('/contactus')}
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
                  } dropdown-toggle ${hdrstyles[`dropdown-toggle`]}`}
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
