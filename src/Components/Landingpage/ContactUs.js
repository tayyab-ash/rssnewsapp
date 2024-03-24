import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ctstyle from "./ContactUs.module.css";
import contact from "./images/contactUs.png";
import { useContext } from "react";
import themeContext from "../Context/Theme/ThemeContext";
import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";

function ContactUs() {
  const mode = useContext(themeContext);
  AOS.init();
  const [isHovered, setIsHovered] = useState(false);
  const divStyle = {
    borderColor: isHovered ? "#FBB244" : "",
    boxShadow: "none",
    borderWidth: "2px",
  };
  return (
    <div>
      <div className={`${ctstyle.section}`}>
        <div className="container">
          <div
            className={`${ctstyle.areacontainer} row justify-content-between`}
          >
            <div className="col-lg-5" data-aos="fade-up">
              <div className={`${ctstyle.headingtext}`}>
                <span
                  className={`${ctstyle.lighttext} ${
                    mode.theme === "dark"
                      ? ctstyle.lighttextDark
                      : ctstyle.lighttextLight
                  }`}
                >
                  Contact Us
                </span>
                <h2
                  className={`${ctstyle.headings} ${
                    mode.theme === "dark"
                      ? ctstyle.headingsDark
                      : ctstyle.headingsLight
                  } mt-2`}
                >
                  Get In Touch
                </h2>
                <p
                  className={`${ctstyle.desctext} ${
                    mode.theme === "dark" ? ctstyle.descDark : ctstyle.descLight
                  } mt-2`}
                >
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>

              <form className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="fname"
                    className={` ${ctstyle.desctext} ${
                      mode.theme === "dark"
                        ? ctstyle.descDark
                        : ctstyle.descLight
                    } form-label mb-0`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`${mode.theme === "dark"? ctstyle.inputDark: ctstyle.inputLight}  form-control`}
                    id="fname"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="lname"
                    className={` ${ctstyle.desctext} ${
                      mode.theme === "dark"
                        ? ctstyle.descDark
                        : ctstyle.descLight
                    } form-label mb-0`}
                  >
                    Last Name
                  </label>
                  <input
                    type="password"
                    className={`${mode.theme === "dark"? ctstyle.inputDark: ctstyle.inputLight}  form-control`}
                    id="lname"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="email"
                    className={` ${ctstyle.desctext} ${
                      mode.theme === "dark"
                        ? ctstyle.descDark
                        : ctstyle.descLight
                    } form-label mb-0`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`${mode.theme === "dark"? ctstyle.inputDark: ctstyle.inputLight}  form-control`}
                    id="email"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputAddress"
                    className={` ${ctstyle.desctext} ${
                      mode.theme === "dark"
                        ? ctstyle.descDark
                        : ctstyle.descLight
                    } form-label mb-0`}
                  >
                    Message
                  </label>
                  <textarea
                    className={`${mode.theme === "dark"? ctstyle.inputDark: ctstyle.inputLight} form-control `}         
                    aria-label="With textarea"
                    rows="4"
                  ></textarea>
                </div>
                <div>
                  <button
                    className={`${ctstyle.contactbtn} ${
                      ctstyle[mode.btnTheme]
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 p-0">
              <div
                className={`img-wrap`}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img src={contact} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
