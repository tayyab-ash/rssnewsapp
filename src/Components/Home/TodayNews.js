import React from "react";
import styles from "./TodayNews.module.css";
import img from "./images/img.jpg";
import NewsComponent from "./NewsComponent";

function TodayNews() {
  return (
    <div>
      <div>
        <div className={`${styles.contentAreaHeading}`}>
          <h2>Today</h2>
          <p>Your daily dose of Insights.</p>
        </div>

        <hr className="mt-4" />

        {/* <div className={`${styles.news}`}>
                    <img src={personalize} alt="" />
                    <p>Follow you favourite feeds to get statrted. All of the feeds you follow will be here.</p>
                    <button>Add Articles</button>
                </div> */}
                <NewsComponent/>
      </div>
    </div>
  );
}

export default TodayNews;
