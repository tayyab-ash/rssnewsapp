import React from 'react'
import footer from "./Footer.module.css"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import twitter from "./images/twitter.png"

function Footer() {
  return (
    <div className={`${footer.footcontainer}`}>
      <div className={`container`}>
        <div className={`row mb-5`}>
          <div className={`col-md-6 col-lg-4`}>
            <div className={`${footer.widget}`}>
              <h3>About ZenFeed</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className={`${footer.sociallinks}`}>
              <a href="/"><img src={facebook} alt="" /></a>
              <a href="/"><img src={instagram} alt="" /></a>
              <a href="/"><img src={twitter} alt="" /></a>
            </div>
          </div>
          <div className={`col-md-6 col-lg-2 pl-lg-5`}>
            <div className={`${footer.widget}`}>
              <h3>Pages</h3>
              <ul className={`${footer.links}`}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Premium</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-md-6 col-lg-2`}>
            <div className={`${footer.widget}`}>
              <h3>More from us</h3>
              <ul className={`${footer.links}`}>
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
              <h3>Contact Us</h3>
              <ul className={`${footer.links}`}>
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
          <div className={`${footer.copyright} col-lg-12 text-center`}>
            <p>Copyright ©2024 All rights reserved | ZenFeed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer