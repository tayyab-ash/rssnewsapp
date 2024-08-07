import React from "react";
import loginstyle from "./Login.module.css";
// import loginimg from "./images/login.jpg";
import logo from "../Landingpage/images/Black and White Monogram Business Logo.png";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

import { useEffect, useContext, useState } from "react";
import themeContext from "../Context/Theme/ThemeContext";

function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const [checkCredential, setcheckCredential] = useState('')

  const navigate = useNavigate();

  const mode = useContext(themeContext);
  AOS.init();
  useEffect(() => {
    if (mode.theme === "dark") {
      // document.body.style.background = "#171720";
      document.body.style.background = "#141416";
    } else {
      document.body.style.background = "#060b41";
    }
    return () => {
      document.body.style.background = "";
      // document.body.style.background = bg.theme
    };
  }, [mode.theme]);

  let token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // const token = json.authtoken
      console.log(json);
      if (json.success) {
      token =  localStorage.setItem("token", json.authToken);
        navigate("/home");
        
      } else {
        setcheckCredential('wrongCred')     
      //   setTimeout(() => {
      //     setcheckCredential('');
      // }, 2000); 
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };
  useEffect(() => {
    
  }, [token])
  

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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
                Welcome to Zen Feed, your serene sanctuary in the digital world of news. We collect and organizes news articles and updates from multiple sources into a single interface. Making it easier for our user to access the content of their favorite topics on a single platform.
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
            onSubmit={handleSubmit}
          >
            <div className="col-lg-6 col-md-8 col-sm-8 col-8 pt-5">
              <div className="text-center">
                <h2
                  className={`${loginstyle.formH} ${
                    mode.theme === "dark" ? loginstyle.formHdark : ""
                  } mb-5`}
                >
                  Login to continue
                </h2>
              </div>
              <div className="mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="email"
                >
                  Username or Email
                </label>
                <input
                  className={`${loginstyle["form-control"]} form-control`}
                  id="email"
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                />
                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect username or email.
                </label> */}
              </div>
              <div className="">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  // typeof="password"
                  className={`${loginstyle["form-control"]} form-control`}
                  id="password"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                />

                <label
                  className={`${`${loginstyle.wrong}`} ${loginstyle[checkCredential]} form-label mb-1`}
                  htmlFor=""
                >
                  *Incorrect email or password
                </label>
              </div>
              <div className={``}>
                <span className={`${loginstyle.labeltxt}`}>
                  Forget password?
                  <a
                    className={`${loginstyle.linktxt} ${
                      mode.theme === "dark" ? loginstyle.linktxtDark : ""
                    }`}
                    href="/"
                  >
                    reset here
                  </a>
                </span>
              </div>
              <div className="form-check m-lg-3">
                <input
                  type="checkbox"
                  className={`${loginstyle["form-check-input"]} form-check-input`}
                  id="dropdownCheck"
                />
                <label
                  className={`${`${loginstyle.remembermetxt}`} form-check-label`}
                  htmlFor="dropdownCheck"
                >
                  Remember me
                </label>
              </div>
              <div className="mt-3">
                {/* <Link to=""> */}
                <button
                  className={`${loginstyle.loginbtn} ${
                    mode.theme === "dark" ? loginstyle.btnDark : ""
                  } $ w-100`}
                  type="submit"
                >
                  Login
                </button>
                {/* </Link> */}
              </div>
              <div className={`text-center mt-2`}>
                <span className={`${loginstyle.labeltxt}`}>or</span>
              </div>
              <div className={`${loginstyle.gbutton} mt-2`}>
                <button className={`${loginstyle.googlebtn} w-100`}>
                  Continue with Google
                </button>
              </div>
              <div className={`text-center mt-2 pb-5`}>
                <span className={`${loginstyle.labeltxt}`}>
                  Don't have an account?
                  <Link
                    className={`${loginstyle.linktxt} ${
                      mode.theme === "dark" ? loginstyle.linktxtDark : ""
                    }`}
                    to="/signup"
                  >
                    Signup here
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
