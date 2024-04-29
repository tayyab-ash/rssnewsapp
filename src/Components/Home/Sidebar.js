import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import themeContext from "../Context/Theme/ThemeContext";

//Images
import home from "./images/home.png";
import rss from "./images/rss.png";
import user from "./images/user.png";
import sidebar from "./images/sidebar.png";
import Today from "./images/Today.png";
import Readlater from "./images/Read later.png";
import Pins from "./images/Pins.png";
import recents from "./images/recent.png";
import log from "./images/log.png";
import list from "./images/list.png"

function Sidebar() {
  const [ExtendSidebar, setExtendSidebar] = useState(null);

  const cont = useContext(themeContext);

  return (
    <div>
      <div className={`${styles.mainSidebar}`}>
        <div className={styles.sidebar}>
          <div className="mt-5 d-flex flex-column">
            <div>
              <Link to="/home">
                {" "}
                <img src={home} alt="home" />{" "}
              </Link>
            </div>

            <div>
              <img
                className="mt-4"
                src={sidebar}
                onClick={()=> {
                    setExtendSidebar(!ExtendSidebar);
                    cont.handleExpand()}}
                alt="sidebar"
              />
            </div>
          </div>
          <div>
            <img src={rss} alt="feed" />
          </div>
          <div className="mb-5">
            <img src={user} alt="user" />
          </div>
        </div>

        <div
          className={`${styles.sidebar2} ${
            ExtendSidebar ? styles.showSidebar : null
          }`}
        >
          <div className={`${styles.innerSidebar}`}>
            <div className={`${styles.list}`}>
              <ul>
                <li>
                  {" "}
                  <img src={Today} alt="" /> Today
                </li>
                <li>
                  {" "}
                  <img src={Readlater} alt="" /> Read Later
                </li>
                <li>
                  {" "}
                  <img src={Pins} alt="" /> Pins
                </li>
                <li>
                  {" "}
                  <img src={recents} alt="" /> Recently Read
                </li>
              </ul>
            </div>

            <div className={`${styles.feeds}`}>
              <p>Feeds</p>
            </div>

            <div className={`${styles.createFolder}`}>
              <p>Create a folder to start reading your favourite content.</p>
              <button>Create Folder</button>
            </div>

            {/* <div className={`${styles.feedList}`}>
            <p><img src={list} alt="" />All</p>
            <ul>
                tech
                <li>new</li>
            </ul>
            </div> */}

            <div className={`${styles.list2}`}>
              <ul>
                <li>
                  {" "}
                  <img src={log} alt="" />
                  Changelog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
