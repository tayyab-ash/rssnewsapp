import React from 'react'
import aboutsec from "./Landingpage.module.css"
import about from "./images/Aboutus.png";
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import themeContext from "../Context/Theme/ThemeContext";


function Aboutsection() {
  const mode = useContext(themeContext)
  return (
    <div>
        <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className={`img-wrap`} data-aos="fade-up">
                <img src={about} alt="" className="img-fluid" />
              </div>
            </div>
            <div
              className={`${aboutsec.headingtext} col-lg-5`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className={`${aboutsec.lighttext } ${mode.theme === "dark"? aboutsec.lighttextDark:aboutsec.lighttextLight}`} data-aos="fade-up">
                About Us
              </span>
              <h2 className={`${aboutsec.headings} ${
                  mode.theme === "dark"
                    ? aboutsec.headingsDark
                    : aboutsec.headingsLight
                }  mt-2`}>Why ZenFeed?</h2>
              <p
                className={`${aboutsec.desctext} ${
                  mode.theme === "dark"
                    ? aboutsec.descDark
                    : aboutsec.descLight
                } mt-3`}
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className={`${aboutsec.desctext} ${
                  mode.theme === "dark"
                    ? aboutsec.descDark
                    : aboutsec.descLight
                } mt-3 mb-5`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div
              // data-aos="fade-up"
              // data-aos-delay="300"
              >
               <Link to="/aboutus"> <button className={`${aboutsec.getstrtbtn} ${aboutsec.bttns} ${
                      aboutsec[mode.btnTheme]
                    } `}>
                  About Us
                </button></Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Aboutsection