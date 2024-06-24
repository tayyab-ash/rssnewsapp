import React from "react";
import styles from "./MainFeedPage.module.css";
import { useContext } from "react";
import themeContext from "../Context/Theme/ThemeContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//images
// import personalize from "./images/Personalization-rafiki.png"
// import personalize from "./images/Personalization-rafiki (2).png"

import NewsComponent from "./NewsComponent";
import TodayNews from "./TodayNews";
import DiscoverFeeds from "./Discover/DiscoverFeeds";

function MainFeedPage() {
  const shrink = useContext(themeContext);
  return (
      <div>
        <div className={`${styles.mainContainer} ${styles[shrink.NewsShrink]}`}>
          <div className={`${styles.contentArea} container`}>
            <div className={`${styles.newsPage}`}>
              <p>sjahfhkjashdkjfhkj</p>
              {/* <TodayNews/> */}
              {/* <Router>
                <Routes>
                    <Route exact path="/home" element={<TodayNews/>}/>
                    <Route exact path="/discover" element={<DiscoverFeeds/>}/>
                </Routes>
              </Router> */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default MainFeedPage;
