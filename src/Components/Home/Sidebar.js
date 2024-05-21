import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import themeContext from "../Context/Theme/ThemeContext";
// import userContext from "../../UserContext";

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
  // const {handleExpand} = props;
  const shrink = useContext(themeContext);
  const [ExtendSidebar, setExtendSidebar] = useState(null);
  const [extendCreateFolder, setextendCreateFolder] = useState(null)
  const [hidden, sethidden] = useState("");
  const [CRFboxState, setCRFboxState] = useState('')
  const [FolderList, setFolderList] = useState(ExtendSidebar)
  //CRF is Create Folder


  // let handleSidebarExtend = () => {
  //   localStorage.setItem('Sidebar' ,ExtendSidebar)
  // }

  
  

  let handleCreateFolderSidebar=()=>{
    if(extendCreateFolder===null){
      setextendCreateFolder('showCreateFolderSidebar')
    }
    else{
      setextendCreateFolder(null)
    }
  }

  let webListHidden = () => {
    if (hidden === "") {
      sethidden("websitesHidden");
    } else {
      sethidden("");
    }
  };




  const [title, setTitle] = useState('');
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        const storedFolders = JSON.parse(localStorage.getItem('folders')) || [];
        setFolders(storedFolders);
        
        const storedSidebarState = JSON.parse(localStorage.getItem('Sidebar'));
        setExtendSidebar(storedSidebarState !== null ? storedSidebarState : false);

        

        if(JSON.parse(localStorage.getItem('folders'))){
          setCRFboxState('CRFhidden')
        }
        else{
          setCRFboxState('')
        }
    }, []);

   

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCreateFolder = () => {
        if (title.trim()) {
            const newFolders = [...folders, title];
            setFolders(newFolders);
            localStorage.setItem('folders', JSON.stringify(newFolders));
            setTitle('');
        }

        if(JSON.parse(localStorage.getItem('folders'))){
          setCRFboxState('CRFhidden')
        }
        else{
          setCRFboxState('')
        }
    };


  return (
    <div>
      <div className={`${styles.mainSidebar}`}>

      <div className={`${styles.createFolderSidebar} ${styles[extendCreateFolder]}`}>

      <div onClick={handleCreateFolderSidebar} className={`${styles.closeButton}`}>
          <i class="fa-solid fa-xmark"></i>
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
                  localStorage.setItem('Sidebar', JSON.stringify(!ExtendSidebar));
                  shrink.handleExpand(); 
                }}
                alt="sidebar"
              />
            </div>
          </div>
          <div>
           <Link to="/home/discover"><img src={rss} alt="feed" /></Link> 
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
            
            <div className={`${styles.createFolder} ${styles[CRFboxState]}`}>
              <p>Create a folder to start reading your favourite content.</p>
              <button onClick={handleCreateFolderSidebar}>Create Folder</button>
            </div>

            

            <div className={`${styles.feedList}`}>
              <div className={`${styles.folderName}`}>
                <ul>
                  <li className={`d-flex`}>
                    <img src={list} alt="" />
                    All
                  </li>
                  <div>
                    {folders.map((folder, index) => (
                            <li key={index}>
                              <img src={drpdown} onClick={webListHidden} alt="" />
                              {folder}
                              </li>
                    ))}
                    <ul className={`${styles.websitesList} ${styles[hidden]}`}>
                      <li>webiste1</li>
                      <li>website2</li>
                      <li>website3</li>
                      <li>website4</li>
                    </ul>
                    <div className={`${styles.newFolder}`}>
                      <p onClick={handleCreateFolderSidebar}>Create New Folder</p>
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
