import React from "react";
import aboutstyle from "./AboutUs.module.css";
import about from "./images/Aboutus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonals from "./Testimonals";
import person1 from "./images/profile.jpg";
// import facebook from "./images/facebook.png";
// import instagram from "./images/instagram.png";
// import twitter from "./images/twitter.png";
import {Link} from 'react-router-dom'

function AboutUs() {
  AOS.init();
  return (
    <div>
      {/* SECTION #1 - ABOUT US */}
      <div className={`${aboutstyle.section1}`}>
        <div className={`container`}>
          <div className="row justify-content-between">
            <div
              className={`${aboutstyle.headingtext} col-lg-5`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className={`${aboutstyle.lighttext}`} data-aos="fade-up">
                About Us
              </span>
              <h2 className={`${aboutstyle.maintext} mt-2`}>Why ZenFeed?</h2>
              <p
                className={`${aboutstyle.desctext} mt-3`}
                // data-aos="fade-up"
                // data-aos-delay="200"
              >
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className={`${aboutstyle.desctext} mt-3 mb-5`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div
              // data-aos="fade-up"
              // data-aos-delay="300"
              >
                <Link to="/contactus"><button
                  className={`${aboutstyle.contactbtn} ${aboutstyle.bttns}`}
                  type="submit"
                >
                  Contact us
                </button></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`img-wrap`} data-aos="fade-up">
                <img src={about} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION #2 - TEAM */}
      <div className={`${aboutstyle.section2}`}>
        <div className={`container`}>
          <div
            className={`col-lg-8 mx-auto text-center mb-5`}
            data-aos="fade-up"
          >
            <span className={`${aboutstyle.lighttext}`} data-aos="fade-up">
              Team
            </span>
            <h2 className={`${aboutstyle.maintext} mt-2`}>Our Team</h2>
            <p className={`${aboutstyle.desctext} mt-3`}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="row justify-content-around ">
            <div className={`col-md-10 col-lg-6 col-xl-5 `} data-aos="fade-up" data-aos-delay="100">
              <div className={`card mb-4`}>
                <div class="row align-items-center g-0">
                  <div class="col-md-4">
                    <img
                      src={person1}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 className={`${aboutstyle.cardtitle} mb-0`}>
                        James Watson
                      </h5>
                      <p class="card-text mb-2">Co-Founder & CEO</p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </small>
                      </p>
                      {/* <div className={`${aboutstyle.sociallinks}`}>
                      <a href="/">
                        <img src={facebook} alt="" />
                      </a>
                      <a href="/">
                        <img src={instagram} alt="" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="" />
                      </a>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-10 col-lg-6 col-xl-5`} data-aos="fade-up" data-aos-delay="100">
              <div className={`card mb-4`}>
                <div class="row align-items-center g-0">
                  <div class="col-md-4">
                    <img
                      src={person1}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 className={`${aboutstyle.cardtitle} mb-0`}>
                        James Watson
                      </h5>
                      <p class="card-text mb-2 ">Co-Founder & CEO</p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </small>
                      </p>
                      {/* <div className={`${aboutstyle.sociallinks}`}>
                      <a href="/">
                        <img src={facebook} alt="" />
                      </a>
                      <a href="/">
                        <img src={instagram} alt="" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="" />
                      </a>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-10 col-lg-6 col-xl-5`} data-aos="fade-up" data-aos-delay="200">
              <div className={`card mb-4`}>
                <div class="row align-items-center g-0">
                  <div class="col-md-4">
                    <img
                      src={person1}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 className={`${aboutstyle.cardtitle} mb-0`}>
                        James Watson
                      </h5>
                      <p class="card-text mb-2">Co-Founder & CEO</p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </small>
                      </p>
                      {/* <div className={`${aboutstyle.sociallinks}`}>
                      <a href="/">
                        <img src={facebook} alt="" />
                      </a>
                      <a href="/">
                        <img src={instagram} alt="" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="" />
                      </a>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-10 col-lg-6 col-xl-5`} data-aos="fade-up" data-aos-delay="200">
              <div className={`card mb-4`}>
                <div class="row align-items-center g-0">
                  <div class="col-md-4">
                    <img
                      src={person1}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 className={`${aboutstyle.cardtitle} mb-0`}>
                        James Watson
                      </h5>
                      <p class="card-text mb-2 ">Co-Founder & CEO</p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </small>
                      </p>
                      {/* <div className={`${aboutstyle.sociallinks}`}>
                      <a href="/">
                        <img src={facebook} alt="" />
                      </a>
                      <a href="/">
                        <img src={instagram} alt="" />
                      </a>
                      <a href="/">
                        <img src={twitter} alt="" />
                      </a>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION #3 - TESTIMONALS */}
      <div className={`${aboutstyle.section3} bg-light`}>
        <div className={`container`}>
          <div className={`row`}>
            <div
              className={`col-lg-8 mx-auto text-center mb-5`}
              data-aos="fade-up"
            >
              <span className={`${aboutstyle.lighttext}`} data-aos="fade-up">
                Testimonals
              </span>
              <h2 className={`${aboutstyle.maintext} mt-2`}>Testimonals</h2>
              <p className={`${aboutstyle.desctext} mt-3`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <Testimonals />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
