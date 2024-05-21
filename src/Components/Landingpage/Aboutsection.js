import React from 'react'
import aboutsec from "./Landingpage.module.css"
import about from "./images/About us page-pana.png";
import aboutLight from "./images/About us page-pana (1).png"
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
                <img src={mode.theme === "dark"? about:aboutLight} alt="" className="img-fluid" />
              </div>
            </div>
            <div
              className={`${aboutsec.headingtext} col-lg-5`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className={`${aboutsec.lighttext } ${mode.theme === "dark"? aboutsec.lighttextDark:aboutsec.lighttextLight}`} 
              >
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
                ZenFeed offers a tranquil oasis amidst the chaos of the digital news landscape. With curated content and a peaceful user experience, we provide a calm and focused environment for informed news consumption. 
              </p>
              <p className={`${aboutsec.desctext} ${
                  mode.theme === "dark"
                    ? aboutsec.descDark
                    : aboutsec.descLight
                } mt-3 mb-5`}>
                From customized feeds to topic preferences, we empower you to shape your news consumption according to your interests. Experience the ultimate convenience of news consumption with ZenFeed – your go-to RSS news aggregator for a seamless, personalized, and hassle-free news experience anytime, anywhere.
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