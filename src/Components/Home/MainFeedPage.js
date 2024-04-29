import React from 'react'
import styles from "./MainFeedPage.module.css"
import { useContext, useState } from "react";
import themeContext from "../Context/Theme/ThemeContext";

//images
// import personalize from "./images/Personalization-rafiki.png"
import personalize from "./images/Personalization-rafiki (2).png"
import NewsComponent from './NewsComponent';


function MainFeedPage() {
    const cont = useContext(themeContext);

  return (
    <div>
        <div className={`${styles.mainContainer} ${styles[cont.NewsShrink]}`}>
            <div className={`${styles.header}`}>
            </div>
            <div className={`${styles.contentArea} container`}>
                <div className={`${styles.contentAreaHeading}`}>
                    <h2>Today</h2>
                    <p>Your daily dose of Insights.</p>
                </div>

                <hr className='mt-4' />

                {/* <div className={`${styles.news}`}>
                    <img src={personalize} alt="" />
                    <p>Follow you favourite feeds to get statrted. All of the feeds you follow will be here.</p>
                    <button>Add Articles</button>
                </div> */}

                <div className={`${styles.newsPage}`}>
                    <NewsComponent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainFeedPage