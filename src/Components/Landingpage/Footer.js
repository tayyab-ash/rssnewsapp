import React from 'react'
import footer from "./Footer.module.css"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"
import { useContext } from 'react'
import themeContext from '../Context/Theme/ThemeContext'

function Footer() {
  const mode = useContext(themeContext)
  return (
    <div className={`${footer.footcontainer}`}>
      <div className={`container`}>
        <div className={`row mb-5`}>
          <div className={`col-md-6 col-lg-4`}>
            <div className={`${footer.widget}`}>
              <h3 className={`${mode.theme === "dark"? footer.fhDark:""}`}>About ZenFeed</h3>
              <p className={`${mode.theme === "dark"? footer.fpDark:""}`}>We prioritize credibility and accuracy, ensuring that you receive trustworthy information from reputable sources.</p>
            </div>
            <div className={`${footer.sociallinks} ${mode.theme === "dark"? footer.img:""}`}>
              <a href="/"><img  src={facebook} alt="facebook" /></a>
              <a href="/"><img src={instagram} alt="instagram" /></a>
              <a href="/"><img src={twitter} alt="twitter/X" /></a>
            </div>
          </div>
          <div className={`col-md-6 col-lg-2 pl-lg-5`}>
            <div className={`${footer.widget}`}>
              <h3 className={`${mode.theme === "dark"? footer.fhDark:""}`}>Pages</h3>
              <ul className={`${footer.links} ${mode.theme === "dark"? footer.linksDark:""}`}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-md-6 col-lg-2`}>
            <div className={`${footer.widget}`}>
              <h3 className={`${mode.theme === "dark"? footer.fhDark:""}`}>More from us</h3>
              <ul className={`${footer.links} ${mode.theme === "dark"? footer.linksDark:""}`}>
                <li>
                  <a href="/">Other Services</a>
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4`}>
            <div className={`${footer.widget}`}>
              <h3 className={`${mode.theme === "dark"? footer.fhDark:""}`}>Contact Us</h3>
              <ul className={`${footer.links} ${mode.theme === "dark"? footer.linksDark:""}`}>
                <li>
                  <a href="/">info@zenfeed.com</a>
                </li>
                <li>
                  <a href="/">040 4507839</a>
                </li>
                <li>
                  <a href="/">123 Street, Sahiwal, Punjab, Pakistan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className={`${footer.copyright} ${mode.theme === "dark"? footer.copyrightDark:""} col-lg-12 text-center`}>
            <p>Copyright ©2024 All rights reserved | ZenFeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer