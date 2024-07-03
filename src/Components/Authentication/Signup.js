import React from "react";
import loginstyle from "./Login.module.css";
// import loginimg from "./images/login.jpg";
import logo from "../Landingpage/images/Black and White Monogram Business Logo.png";
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useState } from "react";
import themeContext from "../Context/Theme/ThemeContext";

function Signup() {
    AOS.init();
    const mode = useContext(themeContext)
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


    const [credentials, setcredentials] = useState({fname: "", lname: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const {fname, lname, email, password} = credentials
      try {
        const response = await fetch("http://localhost:3000/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({fname, lname, email, password}),
        });
        const json = await response.json();
        console.log(json);
          localStorage.setItem("token", json.authtoken);
        
          navigate("/home");
      } catch (error) {
        console.error("There was an error with the fetch operation:", error);
      }
    };

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
                <h2 className={`${loginstyle.loginH} mb-5`}>Welcome to</h2>
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
            className={`${loginstyle.loginform} row justify-content-center col-lg-6 pt-4 pb-5 g-0`}
            action=""
            data-aos="fade-left"
            data-aos-delay="200"
            onSubmit={handleSubmit}
          >
            <div className="col-lg-7 col-md-8 col-sm-8 col-8 pt-5">
              <div className="text-center">
                <h2 className={`${loginstyle.formH} ${mode.theme === "dark"? loginstyle.formHdark:""} mb-5`}>
                  Let's get started
                </h2>
              </div>

              {/* FIRST NAME & LAST NAME */}
              <div className="row">
              <div className="col-lg-6 mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="fname"
                >
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  className={`${loginstyle["form-control"]} form-control`}
                  onChange={onChange}
                />
                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect username or email
                </label> */}
              </div>
                
   
              <div className="col-lg-6 mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="lname"
                >
                  Last Name
                </label>
                <input
                id="lname"
                name="lname"
                  typeof="text"
                  className={`${loginstyle["form-control"]} form-control`}
                  type="text"
                  onChange={onChange}
                />

                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect password
                </label> */}
              </div>
              </div>

              {/* PASSWORD */}
              <div className=" mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                id="password"
                name="password"
                  type="password"
                  className={`${loginstyle["form-control"]} form-control`}
                  onChange={onChange}
                  required
                  minLength={5}
                />
                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect username or email
                </label> */}
              </div>

                {/* CONFIRM PASSWORD */}
              <div className=" mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="cpassword"
                >
                  Confirm Password
                </label>
                <input
                id="cpassword"
                name="cpassword"
                  type="password"
                  className={`${loginstyle["form-control"]} form-control`}
                  onChange={onChange}
                />
                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect username or email
                </label> */}
              </div>
              
              {/* EMAIL */}
              <div className=" mb-5">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                id="email"
                name="email"
                  type="email"
                  className={`${loginstyle["form-control"]} form-control`}
                  onChange={onChange}
                />
                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect username or email
                </label> */}
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
                  I have accepted the  <a className={`${loginstyle.linktxt} ${mode.theme === "dark"? loginstyle.linktxtDark:""}`} href="/">Terms & Conditions</a>
                </label>
              </div>
              <div className="mt-3">
                <button className={`${loginstyle.loginbtn} ${mode.theme === "dark"? loginstyle.btnDark:""} w-100`}>
                  Signup
                </button>
              </div>
              {/* <div className={`text-center mt-2`}>
                <span className={`${loginstyle.labeltxt}`}>Forget password?<a className={`${loginstyle.linktxt}`} href="/">reset here</a></span> 
              </div> */}
              <div className={`text-center mt-2`}>
                <span className={`${loginstyle.labeltxt}`}>or</span> 
              </div>
              <div className={`${loginstyle.gbutton} mt-3`}>
                <button className={`${loginstyle.googlebtn} w-100`}>
                    {/* <img src={google} width={'20px'} alt="" /> */}
                    Continue with Google
                    {/* <span></span> */}
                </button>
              </div>
              <div className={`text-center mt-2`}>
                <span className={`${loginstyle.labeltxt}`}>Already have an account?<Link className={`${loginstyle.linktxt} ${mode.theme === "dark"? loginstyle.linktxtDark:""}`} to="/login">login here</Link></span> 
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup