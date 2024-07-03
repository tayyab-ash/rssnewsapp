import React from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import themeContext from "../Context/Theme/ThemeContext";
import userContext from "../../UserContext";

//Images
import home from "./images/home.png";
import rss from "./images/rss.png";
import rss2 from "./images/rss 2.png";
import user from "./images/user.png";
import sidebar from "./images/sidebar.png";
import Today from "./images/Today.png";
import Today2 from "./images/Today2.png";
import Readlater from "./images/Read later.png";
import Readlater2 from "./images/Read later2.png";
import Pins from "./images/Pins.png";
import Pins2 from "./images/Pins2.png";
import recents from "./images/recent.png";
import log from "./images/log.png";
import list from "./images/list.png";
import drpdown from "./images/down-arrow.png";

function Sidebar() {
  const shrink = useContext(themeContext);
  const [activeItem, setactiveItem] = useState('/home')
  const location = useLocation()
  const {
    ExtendSidebar,
    setExtendSidebar,
    CRFboxState,
    CRFlist,
    title,
    folders,
    setCurrentFeed,
    handleCreateFolder,
    handleInputChange,
    handleDeleteWebsite,
    setfeedPageTitle,
    folderName,
    setFolderName,
    handleSubmit,
    handleInputChange2
  } = useContext(userContext);

  // State mannaging the create folder sidebar
  const [extendCreateFolder, setextendCreateFolder] = useState(null);
  // This state manages the expanding of Folder and their corresponding websites list.
  const [hiddenState, setHiddenState] = useState(() => {
    const storedState = localStorage.getItem("hiddenState");
    return storedState ? JSON.parse(storedState) : {};
  });

  // Function to handle the CreateFolderSidebar.
  let handleCreateFolderSidebar = () => {
    if (extendCreateFolder === null) {
      setextendCreateFolder("showCreateFolderSidebar");
    } else {
      setextendCreateFolder(null);
    }
  };

  // Function that hides or shows the list of websites in the folders.
  const webListHidden = (folderId) => {
    setHiddenState((prevState) => {
      const newState = { ...prevState, [folderId]: !prevState[folderId] };
      return newState;
    });
  };

  
  
  // Function to store the state of Folder list hidden/show in the localStorage so that refreshing the page doesnt effect it.
  useEffect(() => {
    localStorage.setItem("hiddenState", JSON.stringify(hiddenState));
  }, [hiddenState]);

  useEffect(()=>{
  },[activeItem])

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
                value={folderName}
                onChange={handleInputChange2}
              />
            </div>
            <button onClick={handleSubmit}>Create</button>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className="mt-5 d-flex flex-column">
            <div className={`${styles.imgContainer}`}>
              <Link to="/home">
                <img src={home} alt="home" />
              </Link>
            </div>
            <div className={`${styles.imgContainer} mt-4`}>
              <img
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
          <div className={`${styles.imgContainer}`}>
            <Link to="/home/discover">
              <img onClick={()=> setactiveItem('/home/discover')}  src={location.pathname === '/home/discover' ? rss2:rss} alt="feed" />
            </Link>
          </div>
          <div className={`${styles.imgContainer} mb-5`}>
            <Link to='/home/user'>
            <img src={user} alt="user" />
            </Link>
            
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
                <Link to="/home"
                
                >
                  <li className={`${location.pathname === '/home'? styles.activeItem:""}`}
                onClick={()=>setactiveItem('/home')}>
                    <img src={activeItem === '/home'? Today2: Today} alt="" /> Today
                  </li>
                </Link>

                <Link to="/home/readlater">
                  <li className={`${location.pathname === '/home/readlater'? styles.activeItem:""}`}
                onClick={()=>setactiveItem('/home/readlater')}>
                    <img src={activeItem === '/home/readlater'? Readlater2: Readlater} alt="" /> Read Later
                  </li>
                </Link>

                <Link to="/home/pins">
                <li className={`${location.pathname === '/home/pins'? styles.activeItem:""}`}
                onClick={()=>setactiveItem('/home/pins')}>
                  <img src={activeItem === '/home/pins'? Pins2: Pins} alt="" /> Pins
                </li>
                </Link>
                
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
                          {/* <Link to={`/home/${element.name}`} id="folderItem"> */}
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
                                // handleDeleteWebsite(folders);
                              }}
                              className="fa-solid fa-trash"
                            >
                            </i>
                          </li>
                          {/* </Link> */}

                          <ul
                            className={`${styles.websitesList} ${
                              hiddenState[element._id]
                                ? styles.websitesHidden
                                : ""
                            }`}
                          >
                            {element.items.map((item) => {
                              return (
                                <Link to={`/home/${item.title}`}>
                                  <li
                                    onClick={() => {
                                      setfeedPageTitle([
                                        item.title,
                                        item.siteDesc,
                                      ]);
                                      setCurrentFeed(item.title);
                                    }}
                                    key={item._id}
                                  >
                                    <img
                                      src={item.iconLink}
                                      alt=""
                                      width={20}
                                    />
                                    {item.title}
                                    <i
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        // handleDeleteWebsite(folders);
                                      }}
                                      className="fa-solid fa-trash "
                                    ></i>
                                  </li>
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}

                    <div className={`${styles.newFolder} mt-2`}>
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
