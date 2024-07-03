import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./Siteslist.module.css";
import userContext from "../../../../UserContext";
import axios from "axios";

function Siteslist() {
  const { currentKey, folders, folderName,
    setFolderName,
    handleSubmit,
    handleInputChange2 } = useContext(userContext);

  const [sites, setsites] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [siteData, setSiteData] = useState([]);
  const [folderKey, setFolderKey] = useState(null);

  // Function that fetches the sites list from Database and filter them according to on which catagory user Clicks ... i.e if user clicks on the Tech catagory it will fetch the sites and filter out only the sites with the 'tech' key attribute.
  const fetchSites = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/sites/fetchsites"
      );
      const data = await response.json();
      const mainData = data["0"];
      const filteredSites = mainData.sites.filter(
        (element) => element.key === currentKey
      );
      setsites(filteredSites);
      console.log(filteredSites);
    } catch (error) {
      console.error("Error fetching sites:", error);
    }
  };

  // Current Key stores the key of the catagories.
  // this function refreshes the current key on each render.
  useEffect(() => {
    console.log(currentKey, "this is current key");
    if (currentKey !== null) {
      localStorage.setItem("currentKey", currentKey);
    }
    fetchSites();
    // eslint-disable-next-line
  }, [currentKey]);

  // // State that stores the Folder Name.
  // const [folderName, setFolderName] = useState("");

  // // Handles the input coming from the Follow feed input
  // const handleInputChange = (e) => {
  //   setFolderName(e.target.value);
  // };

  // //Function to create a New Folder from feed list.
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(
  //       "http://localhost:3000/api/folders/addfolders/6677edace72093527ab053b5",
  //       {
  //         folders: [
  //           {
  //             name: folderName,
  //           },
  //         ],
  //       }
  //     );
  //     console.log("Folder created:", response.data);
  //     setFolderName("");
  //   } catch (error) {
  //     console.error("Error creating folder:", error);
  //   }
  // };

  // Function to add new Feed Site item in the Folders created by user
  const handleAddItem = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/items/additem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
              folder: folderKey,
            },
          ],
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log("Item Added:", responseData);
      setFolderName("");
    } catch (error) {
      console.error("Error adding Item:", error);
    }
  };

  // Wait for some time when folder is added
  // Was added to check if delaying the addition of item solves the problem
  const handleClick = () => {
    handleAddItem();
  };

  //Refreshes the folder list as soon as state changes, somehow not working
  useEffect(() => {
  }, [siteData]);
  useEffect(() => {
  }, [folderKey]);

  //Toggles the popup window when creating a new folder from the feeds
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
                        console.log(folderKey);
                        handleClick();
                      }}
                      key={element._id}
                    >
                      <span>{element.name}</span>
                      <i
                        onClick={() => setFolderKey([element._id])}
                        className="fa-solid fa-plus"
                      ></i>
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
                onChange={handleInputChange2}
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
                            element.rssLink,
                          ]);
                          console.log(siteData);
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
