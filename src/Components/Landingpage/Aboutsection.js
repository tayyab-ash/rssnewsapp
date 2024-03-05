import React from 'react'
import aboutsec from "./Landingpage.module.css"
import about from "./images/Aboutus.jpg";
import {Link} from 'react-router-dom'

function Aboutsection() {
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
              <span className={`${aboutsec.lighttext}`} data-aos="fade-up">
                About Us
              </span>
              <h2 className={`${aboutsec.maintext} mt-2`}>Why ZenFeed?</h2>
              <p
                className={`${aboutsec.desctext} mt-3`}
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className={`${aboutsec.desctext} mt-3 mb-5`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div
              // data-aos="fade-up"
              // data-aos-delay="300"
              >
               <Link to="/aboutus"> <button className={`${aboutsec.getstrtbtn} ${aboutsec.bttns}`}>
                  About Us
                </button></Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Aboutsection