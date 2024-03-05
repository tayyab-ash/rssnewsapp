import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Carousel from "./Carousel";
import Testimonals from "./Testimonals";
import Footer from "./Footer";
import lpstyles from "./Landingpage.module.css";
import {Link} from 'react-router-dom'

// IMAGES
import hero from "./images/product.png";
import conv from "./images/convenient.png"
import custm from "./images/equalizer.png"
import cont from "./images/Content Control.png"
import Aboutsection from "./Aboutsection";

function Landingpage() {
  AOS.init();
  return (
    <div>

      {/* HEADER */}
      <div className={`${lpstyles.header}`}>
      <Header />
      </div>
      
      {/* HERO SECTION */}
      <div className={`${lpstyles.herosection}`}>
        <div className={`container`}>
          <div className="row justify-content-between">
            <div className={`${lpstyles.headingtext} col-lg-5`}>
              <span className={`${lpstyles.lighttext}`} data-aos="fade-up">
                Welcome to our site
              </span>
              <h2
                className={`${lpstyles.maintext} mt-2`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Take control of your news feed
              </h2>
              <p
                className={`${lpstyles.desctext} mt-3 mb-5`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div data-aos="fade-up" data-aos-delay="300" className="mb-5">
                <Link to="/signup"> <button className={`${lpstyles.getstrtbtn} ${lpstyles.bttns}`}>
                  Get Started
                </button></Link>

                <Link to="/contactus"><button className={`${lpstyles.cntctbtn} ${lpstyles.bttns}`}>
                  Contact Us
                </button></Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className={`img-wrap`}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img src={hero} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION #2 - FEATURES */}
      <div className={`${lpstyles.section2}`}>
        <div className={`container`}>
          <div className={`${lpstyles.textsection} row mb-5`}>
            <div className={`col-lg-5 mx-auto text-center`} data-aos="fade-up">
              <span className={`${lpstyles.lighttext}`}>Features</span>
              <h2 className={`${lpstyles.maintext} mt-2 mb-3`}>Our Features</h2>
              <p className={`${lpstyles.desctext}`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className={`row g-5 text-center`}>
            <div className={`col-lg-4 `} data-aos="fade-up" data-aos-delay="0">
              <div className={`${lpstyles.feature} text-center`}>
                <div className={`${lpstyles.imgsection}`}>
                <img src={conv} alt="" width={'40px'} className="mb-2 opacity-75" />
                </div>
                <h4 className={`${lpstyles.featurestxt}`}>Convenience</h4>
                <p className={`${lpstyles.desctext}`}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>

            <div
              className={`col-lg-4 `}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={`${lpstyles.feature} text-center`}>
                <div className={`${lpstyles.imgsection}`}>
                <img src={custm} alt="" width={'40px'} className="mb-2 opacity-75" />
                </div>
              
                <h4 className={`${lpstyles.featurestxt}`}>Customization</h4>
                <p className={`${lpstyles.desctext}`}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>

            <div
              className={`col-lg-4 `}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={`${lpstyles.feature} text-center`}>
                <div className={`${lpstyles.imgsection}`}>
                <img src={cont} alt="" width={'40px'} className="mb-2 opacity-75" />
                </div>
              
                <h4 className={`${lpstyles.featurestxt}`}>Content Control</h4>
                <p className={`${lpstyles.desctext}`}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION #3 - TOPICS */}
      <div className={`${lpstyles.section3}`}>
        <div className="container">
        <div className={`${lpstyles.textsection} row mb-3`}>
            <div className={`col-lg-5 mx-auto text-center`} data-aos="fade-up">
              <span className={`${lpstyles.lighttext}`}>Topics</span>
              <h2 className={`${lpstyles.maintext} mt-2 mb-3`}>Topics of Interest</h2>
              <p className={`${lpstyles.desctext}`}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <Carousel/>
        </div>
      </div>

      {/* SECTION #4 -  ABOUT*/}
      <div className={`${lpstyles.section4}`}>
        <div className={`container`}>
          <Aboutsection/>
        </div>
      </div>

      {/* SECTION #5 - TESTIMONAL */}
      <div className={`${lpstyles.section5} bg-light`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-lg-8 mx-auto text-center mb-5`}
            data-aos="fade-up"
            >
              <span className={`${lpstyles.lighttext}`} data-aos="fade-up">
                Testimonals
              </span>
              <h2 className={`${lpstyles.maintext} mt-2`}>Testimonals</h2>
              <p className={`${lpstyles.desctext} mt-3`}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <Testimonals/>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={`${lpstyles.footer}`}>
      <Footer/>
      </div>
     
    </div>
  );
}

export default Landingpage;
