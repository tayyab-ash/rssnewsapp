import React from "react";
import loginstyle from "./Login.module.css";
// import loginimg from "./images/login.jpg";
import logo from "../Landingpage/images/Black and White Monogram Business Logo.png";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from 'react-router-dom'
import "aos/dist/aos.css";

import { useContext } from "react";
import themeContext from "../Context/Theme/ThemeContext";

function Login() {
  const mode = useContext(themeContext)
    AOS.init();
  useEffect(() => {
    if(mode.theme === "dark"){
      document.body.style.background = '#171720'
    }
    else{
      document.body.style.background = '#060b41'
    }
    return () => {
      document.body.style.background = '';
      // document.body.style.background = bg.theme
    };
  }, [mode.theme]);

  return (
    <div>
      <div className={``}>
        <div className="row g-0">
          <div
            className={`${loginstyle.loginside} row justify-content-center col-lg-6 text-center pt-5 g-0`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-10 col-md-10 col-sm-10 col-10 pt-5">
              <div className="">
                <h2 className={`${loginstyle.loginH} mb-5`}>Welcome Back 😃</h2>
              </div>
              <div className={`${loginstyle.img}`}>
                <img
                  src={logo}
                  width={"80px"}
                  alt=""
                  className={`${loginstyle.logoimg} mt-5`}
                />
              </div>
              <div className="">
                <h2 className={`${loginstyle.loginH2} mb-5 mt-5`}>ZenFeed</h2>
              </div>
              <div className={`${loginstyle.desctext} pt-5 mb-5`}>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
            <div className={`row g-0`}>
              <div
                className={`${loginstyle.copyright} col-lg-12 text-center mt-2 mb-3`}
              >
                <p>Copyright ©2024 All rights reserved | ZenFeed</p>
              </div>
            </div>
          </div>


          <form
            className={`${loginstyle.loginform} row justify-content-center col-lg-6 pt-5 pb-5 g-0`}
            action=""
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="col-lg-6 col-md-8 col-sm-8 col-8 pt-5">
              <div className="text-center">
                <h2 className={`${loginstyle.formH} ${mode.theme === "dark"? loginstyle.formHdark:""} mb-5`}>
                  Login to continue
                </h2>
              </div>
              <div className="mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor=""
                >
                  Username or Email
                </label>
                <input
                  type="email"
                  className={`${loginstyle["form-control"]} form-control`}
                />
                <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *The username or email you entered does not belong to any account.
                </label>
              </div>
              <div className="">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  typeof="password"
                  className={`${loginstyle["form-control"]} form-control`}
                  type="text"
                />

                <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect password
                </label>
              </div>
              <div className={``}>
                <span className={`${loginstyle.labeltxt}`}>Forget password?<a className={`${loginstyle.linktxt} ${mode.theme === "dark"? loginstyle.linktxtDark:""}`} href="/">reset here</a></span> 
              </div>
              <div className="form-check m-lg-3">
                <input
                  type="checkbox"
                  className={`${loginstyle["form-check-input"]} form-check-input`}
                  id="dropdownCheck"
                />
                <label
                  className={`${`${loginstyle.remembermetxt}`} form-check-label`}
                  for="dropdownCheck"
                >
                  Remember me
                </label>
              </div>
              <div className="mt-3">
                <button className={`${loginstyle.loginbtn} ${mode.theme === "dark"? loginstyle.btnDark:""} $ w-100`}>
                  Login
                </button>
              </div>           
              <div className={`text-center mt-2`}>
                <span className={`${loginstyle.labeltxt}`}>or</span> 
              </div>
              <div className={`${loginstyle.gbutton} mt-2`}>
                <button className={`${loginstyle.googlebtn} w-100`}>
                    {/* <img src={google} width={'20px'} alt="" /> */}
                    Continue with Google
                    {/* <span></span> */}
                </button>
              </div>
              <div className={`text-center mt-2 pb-5`}>
                <span className={`${loginstyle.labeltxt}`}>Don't have an account?<Link className={`${loginstyle.linktxt} ${mode.theme === "dark"? loginstyle.linktxtDark:""}`} to="/signup">Signup here</Link></span> 
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
