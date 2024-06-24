import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import themeContext from "../Context/Theme/ThemeContext";
import userContext from "../../UserContext";

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
import list from "./images/list.png";
import drpdown from "./images/down-arrow.png";

function Sidebar() {
  const shrink = useContext(themeContext);
  const [extendCreateFolder, setextendCreateFolder] = useState(null);
  const [hiddenState, setHiddenState] = useState(() => {
    const storedState = localStorage.getItem('hiddenState');
    return storedState ? JSON.parse(storedState) : {};
  });
  const {
    ExtendSidebar,
    setExtendSidebar,
    CRFboxState,
    CRFlist,
    title,
    folders,
    fetchFolders,
    handleCreateFolder,
    handleInputChange,
    handleDeleteWebsite,
  } = useContext(userContext);

  let handleCreateFolderSidebar = () => {
    if (extendCreateFolder === null) {
      setextendCreateFolder("showCreateFolderSidebar");
    } else {
      setextendCreateFolder(null);
    }
  };

  const webListHidden = (folderId) => {
    setHiddenState((prevState) => {
      const newState = { ...prevState, [folderId]: !prevState[folderId] };
      // console.log('New hidden state:', newState); // Debugging
      return newState;
    });
  };

  

  useEffect(() => {
    localStorage.setItem('hiddenState', JSON.stringify(hiddenState));
  }, [hiddenState]);


  return (
    <div>
      <div className={`${styles.mainSidebar}`}>
        <div
          className={`${styles.createFolderSidebar} ${styles[extendCreateFolder]}`}
        >
          <div
            onClick={handleCreateFolderSidebar}
            className={`${styles.closeButton}`}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className={`${styles.createFolderSidebarInner}`}>
            <h2>Create new folder</h2>
            <div className={`${styles.inputArea}`}>
              <label htmlFor="">Title</label>
              <input
                id="folderTitle"
                type="text"
                placeholder="Topic, type, etc"
                value={title}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleCreateFolder}>Create</button>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className="mt-5 d-flex flex-column">
            <div>
              <Link to="/home">
                <img src={home} alt="home" />
              </Link>
            </div>

            <div>
              <img
                className="mt-4"
                src={sidebar}
                onClick={() => {
                  setExtendSidebar(!ExtendSidebar);
                  localStorage.setItem(
                    "Sidebar",
                    JSON.stringify(!ExtendSidebar)
                  );
                  shrink.handleExpand();
                }}
                alt="sidebar"
              />
            </div>
          </div>
          <div>
            <Link to="/home/discover">
              <img src={rss} alt="feed" />
            </Link>
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
                <Link to="/home">
                  <li>
                    <img src={Today} alt="" /> Today
                  </li>
                </Link>
                <Link to="/readlater">
                <li>
                  <img src={Readlater} alt="" /> Read Later
                </li>
                </Link>
                
                <li>
                  <img src={Pins} alt="" /> Pins
                </li>
                <li>
                  <img src={recents} alt="" /> Recently Read
                </li>
              </ul>
            </div>

            <div className={`${styles.feeds}`}>
              <p>Feeds</p>
            </div>

            <div className={`${styles.createFolder} ${styles[CRFboxState]}`}>
              <p>Create a folder to start reading your favourite content.</p>
              <button onClick={handleCreateFolderSidebar}>Create Folder</button>
            </div>

            <div className={`${styles.feedList} ${styles[CRFlist]}`}>
              <div className={`${styles.folderName}`}>
                <ul>
                  <li className={`d-flex`}>
                    <img src={list} alt="" />
                    All
                  </li>
                  <div>
                    {folders.map((element) => {
                      return (
                        <div key={element._id}>
                          <Link to={`/home/${element.name}`} id="folderItem">
                            <li>
                              <div>
                                <img
                                // key={element._id}
                                  src={drpdown}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    webListHidden(element._id);
                                  }}
                                  alt=""
                                />
                                {element.name}
                              </div>
                              <i
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleDeleteWebsite(folders);
                                }}
                                className="fa-solid fa-trash"
                              ></i>
                            </li>
                          </Link>
                          {/* <Link>

                          </Link> */}
                          <ul
                            className={`${styles.websitesList} ${hiddenState[element._id] ? styles.websitesHidden : ''}`}
                          >
                            {element.items.map((item) => {
                              return (
                              <li key={item._id} >
                                <img src={item.iconLink} alt="" width={20} />
                                {item.title}
                                </li>
                            );
                            })}
                          </ul>
                        </div>
                      );
                    })}

                    <div className={`${styles.newFolder}`}>
                      <p onClick={handleCreateFolderSidebar}>
                        Create New Folder
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

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
