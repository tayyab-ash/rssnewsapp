import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./Siteslist.module.css";
import userContext from "../../../../UserContext";
import axios from "axios";

function Siteslist() {
  const [sites, setsites] = useState([]);
  const { currentKey, folders } = useContext(userContext);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [siteData, setSiteData] = useState([]);
  const [folderKey, setFolderKey] = useState(null)

  const fetchSites = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/sites/fetchsites"
      );
      const data = await response.json();
      const mainData = data["0"];
      setsites(mainData.sites);
      const filteredSites = mainData.sites.filter(
        (element) => element.key === currentKey
      );
      setsites(filteredSites);
      console.log(filteredSites);
    } catch (error) {
      console.error("Error fetching sites:", error);
    }
  };

  useEffect(() => {
    console.log(currentKey);
    if (currentKey !== null) {
      localStorage.setItem("currentKey", currentKey);
    }
    fetchSites();
    // console.log(folderKey)
    // eslint-disable-next-line
  }, [currentKey]);

  

  const [folderName, setFolderName] = useState("");

  const handleInputChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/api/folders/addfolders/6677edace72093527ab053b5",
        {
          folders: [
            {
              name: folderName,
            },
          ],
        }
      );
      console.log("Folder created:", response.data);
      setFolderName("");
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const handleAddItem = async () => {
    // await folderKey
    try {
      // const folderId = '6677edace72093527ab053b6'; // Example folder ID as string
      const response = await fetch('http://localhost:3000/api/items/additem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              key: siteData[0],
              title: siteData[1],
              siteLink: siteData[2],
              siteDesc: siteData[3],
              iconLink: siteData[4],
              rssLink: siteData[5],
              folder: folderKey // Send folder ID as string
            },
          ],
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Item Added:', responseData);
      setFolderName('');
    } catch (error) {
      console.error('Error adding Item:', error);
    }
  };

  const handleClick = () => {
    setTimeout(() => {
      handleAddItem();
    }, 1000);
  };

  useEffect(() => {
    // localStorage.setItem('folderKey', JSON.stringify(folderKey));
    console.log(siteData);
    // handleClick()
    console.log(folderKey);
  }, [siteData, folderKey]);
  
  

  

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div className={``}>
        {isPopupVisible && (
          <div className={styles.popupContainer}>
            <div className={styles.popup}>
              <ul>
                {folders.map((element) => {
                  return (
                    <li
                      onClick={() => {
                        setFolderKey([element._id]);
                        console.log(folderKey)
                        handleClick();
                      }}
                      key={element._id}
                    >
                      <span>{element.name}</span>
                      <i className="fa-solid fa-plus"></i>
                    </li>
                  );
                })}
              </ul>
              <hr />
              <span>or create a new folder</span>
              <hr />
              <input
                id="name"
                name="name"
                type="text"
                value={folderName}
                onChange={handleInputChange}
                placeholder="Topic, type, etc"
              />
              <button onClick={handleSubmit} className={`${styles.createBtn}`}>
                Create New Folder
              </button>
              <button className={`${styles.closeBtn}`} onClick={togglePopup}>
                Close
              </button>
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
                      <button
                        onClick={() => {
                          
                          setSiteData([
                            element.key, 
                            element.title, 
                            element.siteLink, 
                            element.siteDesc, 
                            element.iconLink, 
                            element.rssLink]);
                          console.log(siteData)
                          togglePopup();
                        }}
                      >
                        Follow
                      </button>
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
