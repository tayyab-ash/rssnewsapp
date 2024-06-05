import React, { useContext } from "react";
import styles from "./TodayNews.module.css";
import img from "./images/img.jpg";
import NewsComponent from "./NewsComponent";
import userContext from "../../UserContext";

function TodayNews() {
  const { articles, totalResults, updateNews, updateNewsScroll } =
    useContext(userContext);

  return (
    <div>
      <div>
        <div className={`${styles.contentAreaHeading}`}>
          <h2>Today</h2>
          <p>Your daily dose of Insights.</p>
        </div>
        <hr className="mt-4 z-n1 position-relative" />

        {/* <div className={`${styles.news}`}>
                    <img src={personalize} alt="" />
                    <p>Follow you favourite feeds to get statrted. All of the feeds you follow will be here.</p>
                    <button>Add Articles</button>
                </div> */}
        <div>
          {articles.map((element) => {
            return (
              <NewsComponent
                key={
                  element.url === "https://removed.com"
                    ? Math.random()
                    : element.url
                }
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={!element.author ? "Unknown" : element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodayNews;
