
import styles from "./App.module.css";
import React from "react";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import AboutUs from "./Components/Landingpage/AboutUs";
import ContactUs from "./Components/Landingpage/ContactUs";
import Footer from "./Components/Landingpage/Footer";
import Header from "./Components/Landingpage/Header";
import Landingpage from "./Components/Landingpage/Landingpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import themeContext from "./Components/Context/Theme/ThemeContext";
import userContext from "./UserContext";
import UserState from "./UserState";

import Homepage from "./Components/Home/Homepage";
import DiscoverFeeds from "./Components/Home/Discover/DiscoverFeeds";
import TodayNews from "./Components/Home/TodayNews";

import folderComponent from "./Components/FolderComponent";
import New from "./Components/New";
import Siteslist from "./Components/Home/Discover/Sources/Siteslist";


function App() {
  const shrink = useContext(themeContext);
  const {folders, categories, sites} =useContext(userContext);

  

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
                    <Route exat path="/hehe" element={<New/>}/>
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
                            {folders.map((folders, index) => (
                            <Route key={index} path={`/folders/:id`} component={folderComponent} />
                              ))}
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
                                        {categories.map((element)=>{
                                          return(
                                          <Route key={element.key} path={`/sources/${element.key}`} element={<Siteslist/>}/>
                                          )})} 
                                        
                                      </Routes>
                                      
                                    </div>
                                    <Routes>
                                    </Routes>
                                  </div>
                                </React.Fragment>
                              }
                            />
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

// export default App;
// eslint-disable-next-line
export default () => (
  <UserState>
    <App />
  </UserState>
);
