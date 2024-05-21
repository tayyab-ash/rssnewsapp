import React from "react";
import styles from "./DiscoverFeeds.module.css";
import { Link } from "react-router-dom";

//images
import techimg from "./assets/960x0.webp";
import techimg2 from "./assets/WhatsApp Image 2024-05-13 at 11.18.24.jpeg";

function DiscoverFeeds() {
  return (
    <div>
      <div className={`${styles.discoverPg}`}>
        <div className={`${styles.contentAreaHeading}`}>
          <h2>Discover</h2>
          <h4>Follow your favourite websites</h4>
        </div>
        <div className={`${styles.feedSearch}`}>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className={`${styles.catagories} row`}>
          <div className={`${styles.card} col-lg-4 col-md-6`}>
            <Link to="sources/tech" className={`${styles.imageContainer}`}>
              {" "}
              <div>
                <div className={`img-wrap`}>
                  <img src={techimg2} alt="" className="img-fluid" />
                </div>
              </div>
              <span className={`${styles.centeredText}`}>TECH</span>
            </Link>
          </div>

          <div className={`${styles.card} col-lg-4 col-md-6`}>
            <Link to="sources/tech" className={`${styles.imageContainer}`}>
              {" "}
              <div>
                <div className={`img-wrap`}>
                  <img src={techimg2} alt="" className="img-fluid" />
                </div>
              </div>
              <span className={`${styles.centeredText}`}>TECH</span>
            </Link>
          </div>

          <div className={`${styles.card} col-lg-4 col-md-6`}>
            <Link to="sources/tech" className={`${styles.imageContainer}`}>
              {" "}
              <div>
                <div className="img-wrap">
                  <img src={techimg2} alt="" className="img-fluid" />
                </div>
              </div>
              <span className={`${styles.centeredText}`}>TECH</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverFeeds;
