import React from "react";
import styles from "./NewsComponent.module.css";
import pins from "./images/Pins.png";
import Readlater from "./images/Read later.png";
const moment = require("moment");

function NewsComponent(props) {
  let { title, description, newsUrl, imageUrl, pubDate } = props;

  const descriptionLength = 20;
  const truncateText = (text) => {
    const words = text.split(" ");
    return (
      words.slice(0, descriptionLength).join(" ") +
      (words.length > descriptionLength ? "..." : "")
    );
  };

  const date = moment(pubDate);
  const formattedDate = date.format("MM/DD/YYYY");
  // console.log(formattedDate);
  return (
    <div>
      <div>
        {/* <div className={`${styles.providerName}`}>
                <p>FEED PROVIDER</p>
            </div> */}
        <div className={`${styles.mainNewsComponent}`}>
          <div className={`${styles.imgSection}`}>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={
                  imageUrl === null
                    ? "https://i.ibb.co/zXk0dXC/News-APP-2.png"
                    : imageUrl
                }
                // onError={handleImageError}
                alt=""
              />
            </a>
          </div>
          <div className={`${styles.newsDescription}`}>
            <div className={`${styles.headingIcons}`}>
              <h3>
                {title === "[Removed]"
                  ? "Sorry! This news is not avaiable right now. Please refresh to update news catalog!"
                  : title}
              </h3>

              <div className={`${styles.Icons}`}>
                <img src={pins} alt="pins" className="mx-2" />
                <img src={Readlater} alt="readlater" />
              </div>
            </div>
            <p>{formattedDate}</p>

            <p>{description && truncateText(description)}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
