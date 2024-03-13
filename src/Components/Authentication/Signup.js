import React from "react";
import loginstyle from "./Login.module.css";
import loginimg from "./images/login.jpg";
import logo from "../Landingpage/images/Black and White Monogram Business Logo.png";
import { useEffect } from "react";
import { NavLink, Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {
    AOS.init();
    useEffect(() => {
      document.body.style.background = '#091059'
      return () => {
        document.body.style.background = ''
      };
    }, []);

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
          >
            <div className="col-lg-7 col-md-8 col-sm-8 col-8 pt-5">
              <div className="text-center">
                <h2 className={`${loginstyle.formH} mb-5`}>
                  Let's get started
                </h2>
              </div>

              {/* FIRST NAME & LAST NAME */}
              <div className="row">
              <div className="col-lg-6 mb-3">
                <label
                  className={`${`${loginstyle.labeltxt}`} form-label mb-0`}
                  htmlFor=""
                >
                  First Name
                </label>
                <input
                  type="text"
                  class={`${loginstyle["form-control"]} form-control`}
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
                  htmlFor=""
                >
                  Last Name
                </label>
                <input
                  typeof="text"
                  class={`${loginstyle["form-control"]} form-control`}
                  type="text"
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
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  type="password"
                  class={`${loginstyle["form-control"]} form-control`}
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
                  htmlFor=""
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  class={`${loginstyle["form-control"]} form-control`}
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
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  type="email"
                  class={`${loginstyle["form-control"]} form-control`}
                />
                {/* <label
                  className={`${`${loginstyle.wrong}`} form-label mb-0`}
                  htmlFor=""
                >
                  *Incorrect username or email
                </label> */}
              </div>
              

              <div class="form-check m-lg-3">
                <input
                  type="checkbox"
                  class={`${loginstyle["form-check-input"]} form-check-input`}
                  id="dropdownCheck"
                />
                <label
                  class={`${`${loginstyle.remembermetxt}`} form-check-label`}
                  for="dropdownCheck"
                >
                  I have accepted the  <a className={`${loginstyle.linktxt}`} href="/">Terms & Conditions</a>
                </label>
              </div>
              <div className="mt-3">
                <button className={`${loginstyle.loginbtn} w-100`}>
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
                <span className={`${loginstyle.labeltxt}`}>Already have an account?<Link className={`${loginstyle.linktxt}`} to="/login">login here</Link></span> 
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup