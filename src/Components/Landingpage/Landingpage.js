import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import Testimonals from "./Testimonals";
import lpstyles from "./Landingpage.module.css";
import { Link } from "react-router-dom";

// IMAGES
import hero from "./images/product.png";
import conv from "./images/convenient.png";
import custm from "./images/equalizer.png";
import cont from "./images/Content Control.png";
import Aboutsection from "./Aboutsection";
import themeContext from "../Context/Theme/ThemeContext";

function Landingpage() {
  const mode = useContext(themeContext);
  AOS.init();

  return (
    <div>
      {/* HERO SECTION */}
      <div className={`${lpstyles.herosection}`}>
        <div className={` ${lpstyles.herobg} container`}>
          <div className="row justify-content-between">
            <div className={`${lpstyles.headingtext} col-lg-5`}>
              <span
                className={`${lpstyles.lighttext} ${
                  mode.theme === "dark"
                    ? lpstyles.lighttextDark
                    : lpstyles.lighttextLight
                } `}
                data-aos={mode.animation}
                data-aos-delay="100"
              >
                Welcome to our site
              </span>
              {/* ${lpstyles[mode.headingTheme]} */}
              <h2
                className={`${lpstyles.headings} ${
                  mode.theme === "dark"
                    ? lpstyles.headingsDark
                    : lpstyles.headingsLight
                }  mt-2`}
                data-aos={mode.animation}
                data-aos-delay="100"
              >
                {/* Take control of your news feed */}
               Zenfeed Your Gateway to Mindfull Consumption
               {/* Escape the Noise, Embrace the Zen of ZenFeed */}
              </h2>
              <p
                className={`${lpstyles.desctext} ${
                  mode.theme === "dark" ? lpstyles.descDark : lpstyles.descLight
                } mt-3 mb-5`}
                data-aos={mode.animation}
                data-aos-delay="200"
              >
                Welcome to Zen Feed, your serene sanctuary in the digital world of news. We collect and organizes news articles and updates from multiple sources into a single interface. Making it easier for our user to access the content of their favorite topics on a single platform.
              </p>
              <div data-aos="fade-up" data-aos-delay="300" className="mb-5">
                <Link to="/signup">
                  {" "}
                  <button
                    className={`${lpstyles.getstrtbtn} ${lpstyles.bttns} ${
                      lpstyles[mode.btnTheme]
                    } `}
                  >
                    Get Started
                  </button>
                </Link>

                <Link to="/contactus">
                  <button
                    className={`${lpstyles.cntctbtn} ${lpstyles.bttns} ${
                      lpstyles[mode.btn2Theme]
                    }`}
                  >
                    Contact Us
                  </button>
                </Link>
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
              <span
                className={`${lpstyles.lighttext} ${
                  mode.theme === "dark"
                    ? lpstyles.lighttextDark
                    : lpstyles.lighttextLight
                }`}
              >
                Features
              </span>
              <h2
                className={`${lpstyles.headings} ${
                  mode.theme === "dark"
                    ? lpstyles.headingsDark
                    : lpstyles.headingsLight
                }  mt-2 mb-3`}
              >
                Our Features
              </h2>
              <p
                className={`${lpstyles.desctext} ${
                  mode.theme === "dark" ? lpstyles.descDark : lpstyles.descLight
                }`}
              >
                Here, we offer a tranquil escape from information overload, presenting a harmonious blend of features designed to elevate your news consumption experience
              </p>
            </div>
          </div>

          <div className={`row text-center`}>
            <div className={`col-lg-4 `} data-aos="fade-up" data-aos-delay="0">
              <div className={`${lpstyles.feature} text-center`}>
                <div className={`${lpstyles.imgsection} ${mode.theme === "dark"? lpstyles.imgsectionBgDark:""}`}>
                  <img
                    src={conv}
                    alt=""
                    width={"40px"}
                    className={`${
                      mode.theme === "dark"
                        ? lpstyles.img
                        : ""
                    }  mb-2 opacity-75`}
                  />
                </div>
                <h4
                  className={`${lpstyles.featurestxt} ${
                    mode.theme === "dark"
                      ? lpstyles.featureDark
                      : lpstyles.featureLight
                  }`}
                >
                  Convenience
                </h4>
                <p
                  className={`${lpstyles.desctext} ${
                    mode.theme === "dark"
                      ? lpstyles.descDark
                      : lpstyles.descLight
                  }`}
                >
                  Access Zen Feed anytime, anywhere, across all your devices and stay ahead of the curve with real-time updates.
                </p>
              </div>
            </div>

            <div
              className={`col-lg-4 `}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={`${lpstyles.feature} text-center`}>
                <div className={`${lpstyles.imgsection} ${mode.theme === "dark"? lpstyles.imgsectionBgDark:""}`}>
                  <img
                    src={custm}
                    alt=""
                    width={"40px"}
                    className={`${
                      mode.theme === "dark"
                        ? lpstyles.img
                        : ""
                    }  mb-2 opacity-75`}
                  />
                </div>

                <h4
                  className={`${lpstyles.featurestxt} ${
                    mode.theme === "dark"
                      ? lpstyles.featureDark
                      : lpstyles.featureLight
                  }`}
                >
                  Customization
                </h4>
                <p
                  className={`${lpstyles.desctext} ${
                    mode.theme === "dark"
                      ? lpstyles.descDark
                      : lpstyles.descLight
                  }`}
                >
                  Customize your news experience with personalized feeds. Navigate with ease through our clean design and user-friendly features.
                </p>
              </div>
            </div>

            <div
              className={`col-lg-4 `}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={`${lpstyles.feature} text-center`}>
                <div className={`${lpstyles.imgsection} ${mode.theme === "dark"? lpstyles.imgsectionBgDark:""}`}>
                  <img
                    src={cont}
                    alt=""
                    width={"40px"}
                    className={`${
                      mode.theme === "dark"
                        ? lpstyles.img
                        : ""
                    }  mb-2 opacity-75`}
                  />
                </div>

                <h4
                  className={`${lpstyles.featurestxt} ${
                    mode.theme === "dark"
                      ? lpstyles.featureDark
                      : lpstyles.featureLight
                  }`}
                >
                  Content Control
                </h4>
                <p
                  className={`${lpstyles.desctext} ${
                    mode.theme === "dark"
                      ? lpstyles.descDark
                      : lpstyles.descLight
                  }`}
                >
                  Tailor your content based on your interests, preferences, and favorite topics, ensuring that you receive updates that matter most to you.
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
              <span
                className={`${lpstyles.lighttext} ${
                  mode.theme === "dark"
                    ? lpstyles.lighttextDark
                    : lpstyles.lighttextLight
                }`}
              >
                Topics
              </span>
              <h2
                className={`${lpstyles.headings} ${
                  mode.theme === "dark"
                    ? lpstyles.headingsDark
                    : lpstyles.headingsLight
                }  mt-2 mb-3`}
              >
                Topics of Interest
              </h2>
              <p
                className={`${lpstyles.desctext} ${
                  mode.theme === "dark" ? lpstyles.descDark : lpstyles.descLight
                }`}
              >
                Say goodbye to endless scrolling and multiple tabs. With Zen Feed, access all your favorite news sources in one centralized platform, saving you time and effort.
              </p>
            </div>
          </div>
          <Carousel />
        </div>
      </div>

      {/* SECTION #4 -  ABOUT*/}
      <div className={`${lpstyles.section4} ${mode.theme === "dark"? lpstyles.section4Dark:lpstyles.section4Light}`}>
        <div className={`container`}>
          <Aboutsection />
        </div>
      </div>

      {/* SECTION #5 - TESTIMONAL */}
      <div className={`${lpstyles.section5} ${mode.theme === "light"? "bg-light": lpstyles.bgdark }`}>
        <div className={`container`}>
          <div className={`row`}>
            <div
              className={`col-lg-8 mx-auto text-center mb-5`}
              data-aos="fade-up"
            >
              <span
                className={`${lpstyles.lighttext} ${
                  mode.theme === "dark"
                    ? lpstyles.lighttextDark
                    : lpstyles.lighttextLight
                }`}
                data-aos="fade-up"
              >
                Testimonals
              </span>
              <h2
                className={`${lpstyles.headings} ${
                  mode.theme === "dark"
                    ? lpstyles.headingsDark
                    : lpstyles.headingsLight
                }  mt-2 mb-3`}
              >
                Testimonals
              </h2>
              <p
                className={`${lpstyles.desctext} ${
                  mode.theme === "dark" ? lpstyles.descDark : lpstyles.descLight
                } mt-3`}
              >
                Join a community of mindful news consumers on ZenFeed. Share insights, spark discussions, and connect with like-minded individuals who share your passion for informed and conscious news consumption.
              </p>
            </div>
            <Testimonals />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
