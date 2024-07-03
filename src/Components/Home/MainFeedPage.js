import React, { useContext, useEffect, useState } from "react";
import styles from "./TodayNews.module.css";
import img from "./images/img.jpg";
import NewsComponent from "./NewsComponent";
import userContext from "../../UserContext";


function MainFeedPage() {
  const { articles, folders, feedPageTitle, setfeedPageTitle, rssFeed } = useContext(userContext);
  
  
  return (
    <div>
      <div>
        <div className={`${styles.contentAreaHeading}`}>
          {/* {folders.map((element) => {
            return element.items.map((item) => {
              return <h2>{item.title}</h2>;
            });
          })} */}
          <h2>{feedPageTitle[0]}</h2>
          <p>{feedPageTitle[1]}</p>
        </div>
        <hr className="mt-4 z-n1 position-relative" />

        {/* <div className={`${styles.news}`}>
                  <img src={personalize} alt="" />
                  <p>Follow you favourite feeds to get statrted. All of the feeds you follow will be here.</p>
                  <button>Add Articles</button>
              </div> */}
        <div>
          {rssFeed.map((element) => {
            return (
              <NewsComponent
                // key={
                //   element.url === "https://removed.com"
                //     ? Math.random()
                //     : element.url
                // }
                title={element.title}
                description={element.description}
                imageUrl={element.cover_image}
                newsUrl={element.link}
                pubDate={element.publish_date}
                // author={!element.author ? "Unknown" : element.author}
                // date={element.publishedAt}
                // source={element.source.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainFeedPage;
