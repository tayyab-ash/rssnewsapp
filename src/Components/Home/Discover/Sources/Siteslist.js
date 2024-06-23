import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./Siteslist.module.css";
import userContext from "../../../../UserContext";

function Siteslist() {
  const [sites, setsites] = useState([]);
  const {
    currentKey,
    ExtendSidebar,
    setExtendSidebar,
    CRFboxState,
    CRFlist,
    title,
    folders,
    handleCreateFolder,
    handleInputChange,
    handleDeleteWebsite} = useContext(userContext)


  const {
    
  } = useContext(userContext);


  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const fetchSites = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/sites/fetchsites");
    const data = await response.json();
    const mainData = data["0"];
    setsites(mainData.sites);
    const filteredSites = mainData.sites.filter(element => element.key === currentKey);
    setsites(filteredSites);
    console.log(filteredSites)
    } catch (error) {
      console.error("Error fetching sites:", error);
    }
    
  };

  useEffect(() => {
    console.log(currentKey)
    if (currentKey !== null) {
      localStorage.setItem('currentKey', currentKey);
    }
    fetchSites();
  }, [currentKey]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };


  return (
    <div>
      <div className={``}>
      {isPopupVisible && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            {/* <p>kasjdlkasjldkasjlkdjaslkjdlkasjdlkja</p> */}
            <ul>
              <li>
                <span>item1</span>
                <i class="fa-solid fa-plus"></i>
              </li>
              <li>
                <span>item1</span>
                <i class="fa-solid fa-plus"></i>
              </li>
              <li>
                <span>item1</span>
                <i class="fa-solid fa-plus"></i>
              </li>
            </ul>
            <hr />
            {/* <span>or</span> <br /> */}
            <span>or create a new folder</span>
            <hr />
            <input type="text" placeholder="Topic, type, etc" onChange={handleInputChange}/>
            <button onClick={handleCreateFolder} className={`${styles.createBtn}`}>Create New Folder</button>
            <button className={`${styles.closeBtn}`} onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
        <div className={`${styles.sitesContainer} row g-3`}>
          {sites && sites.length > 0 ? (
            sites.map((element) => {
              return (
                <div
                  className={`${styles.siteCard} col-lg-8`}
                  key={element._id}
                >
                  <div className={`${styles.cardInner}`}>
                    <div className={`${styles.siteTitlediv}`}>
                      <div className={`${styles.siteImg}`}>
                        <img src={element.iconLink} alt="img" width={50} />
                      </div>
                      <div className={`${styles.siteTitle}`}>
                        <h5>{element.title}</h5>
                        <span>{element.siteLink}</span>
                        <p>{element.siteDesc}</p>
                      </div>
                    </div>
                    <div className={`${styles.followBtn}`}>
                      <button onClick={togglePopup}>Follow</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Siteslist;
