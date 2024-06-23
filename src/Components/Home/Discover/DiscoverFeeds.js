import React, { useContext } from "react";
import { useEffect, useState } from "react";
import styles from "./DiscoverFeeds.module.css";
import { Link } from "react-router-dom";
import userContext from "../../../UserContext";

function DiscoverFeeds() {
  // const [categories, setcategories] = useState([]);

  // const fetchCatagories = async () => {
  //   const response = await fetch(
  //     "http://localhost:3000/api/catagories/fetchcategory"
  //   );
  //   const data = await response.json();
  //   // console.log(data);
  //   const mainData = data["0"];
  //   console.log(data["0"]);
  //   setcategories(mainData.categories);
  // };

  // useEffect(() => {
  //   fetchCatagories();
  // }, []);

  const {categories, currentKey, setCurrentKey} = useContext(userContext);
  // const [currentKey, setcurrentKey] = useState(null)

  return (
    <div>
      <div className={`${styles.catagories} row`}>
        <div className={`${styles.headingText}`}>
        <h4>International</h4>
        <hr />
        </div>
        {categories && categories.length > 0 ? (
          categories.map((element) => {
            return (
              <div
                className={`${styles.card} col-lg-3`}
                key={element._id}
              >
                <Link onClick={()=>setCurrentKey(element.key)} to={`sources/${element.key}`} className={`${styles.imageContainer}`}>
                  <div className="img-wrap">
                    <img src={element.catImgUrl} alt="" className="img-fluid" />
                  </div>
                  <span className={`${styles.centeredText}`}>
                    {element.catName}{" "}
                  </span>
                </Link>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default DiscoverFeeds;
