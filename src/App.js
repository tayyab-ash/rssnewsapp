// import "./App.css";
import styles from "./App.module.css";
import React, { useEffect } from "react";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import AboutUs from "./Components/Landingpage/AboutUs";
import ContactUs from "./Components/Landingpage/ContactUs";
import Footer from "./Components/Landingpage/Footer";
import Header from "./Components/Landingpage/Header";
import Landingpage from "./Components/Landingpage/Landingpage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import ThemeState from "./Components/Context/Theme/ThemeState";
import { useContext } from "react";
import themeContext from "./Components/Context/Theme/ThemeContext";
// import userContext from "./UserContext";

import Homepage from "./Components/Home/Homepage";
import DiscoverFeeds from "./Components/Home/Discover/DiscoverFeeds";
import MainFeedPage from "./Components/Home/MainFeedPage";
import TodayNews from "./Components/Home/TodayNews";
import Sidebar from "./Components/Home/Sidebar";
import Header2 from "./Components/Home/Header2";
import Tech from "./Components/Home/Discover/Sources/Tech";

import techimg2 from "./Components/Home/Discover/assets/WhatsApp Image 2024-05-13 at 11.18.24.jpeg"

function App() {
  const shrink = useContext(themeContext);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <React.Fragment>
                <Header />
                <div>
                  <Routes>
                    <Route exact path="/" element={<Landingpage />} />
                    <Route exact path="/aboutus" element={<AboutUs />} />
                    <Route exact path="/contactus" element={<ContactUs />} />
                  </Routes>
                </div>
                <Footer />
              </React.Fragment>
            }
          />

          <Route
            path="/home/*"
            element={
              <React.Fragment>
                <Homepage />
                <div>
                  <div
                    className={`${styles.mainContainer} ${
                      styles[shrink.NewsShrink]
                    }`}
                  >
                    <div className={`${styles.contentArea} container`}>
                      <div className={`${styles.newsPage}`}>
                        <div>
                          <Routes>
                            <Route exact path="/" element={<TodayNews />} />
                            <Route
                              path="/discover/*"
                              element={
                                <React.Fragment>
                                  <div>
                                    <div className={`${styles.discoverPg}`}>
                                      <div
                                        className={`${styles.contentAreaHeading}`}
                                      >
                                        <h2>Discover</h2>
                                        <h4>Follow your favourite websites</h4>
                                      </div>
                                      <div className={`${styles.feedSearch}`}>
                                        <input type="text" />
                                        <button>Search</button>
                                      </div>
                                      <Routes>
                                        <Route exact path="/" element={<DiscoverFeeds/>}/>
                                        <Route exact path="/sources/tech" element={<Tech/>}/>
                                      
                                      </Routes>
                                      
                                    </div>
                                    <Routes>
                                    </Routes>
                                  </div>
                                </React.Fragment>
                              }
                            />

                            {/* <Route exact path="/discover/sources/tech" element={<Tech/>}/> */}
                          </Routes>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
