import React from "react";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserState({ children }) {
  const [CRFboxState, setCRFboxState] = useState("");
  const [CRFlist, setCRFlist] = useState("CRFhidden");
  const [title, setTitle] = useState("");
  const [folders, setFolders] = useState([]);
  const [ExtendSidebar, setExtendSidebar] = useState(null);

  const [articles, setarticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=29c1ef34957a49169e64d815dd84541b`;
    // setloading(true);
    let data = await fetch(url);
    // props.setProgress(40);
    let parseData = await data.json();
    console.log(parseData);
    // props.setProgress(70);
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    // setloading(false)
    // props.setProgress(100);
  };

  const updateNewsScroll = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=29c1ef34957a49169e64d815dd84541b`;
      // setloading(true)
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      setarticles(articles.concat(parseData.articles))
      settotalResults(parseData.totalResults)
      // setloading(false)
      // setpage(page+1)
  }
  useEffect(() => {
    // document.title = `${capitalizeTitle(props.category)} - NewsAPP`
    updateNews(); // eslint-disable-next-line
  }, []);





  useEffect(() => {
    const storedFolders = JSON.parse(localStorage.getItem("folders")) || [];
    const storedSidebarState = JSON.parse(localStorage.getItem("Sidebar"));
    setExtendSidebar(storedSidebarState !== null ? storedSidebarState : false);
    setFolders(storedFolders);

    if (JSON.parse(localStorage.getItem("folders")) && ![]) {
      setCRFboxState("CRFhidden");
      setCRFlist("");
    } else {
      setCRFboxState("");
    }


  }, []);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCreateFolder = () => {
    if (title.trim()) {
      const newFolders = [...folders, title];
      setFolders(newFolders);
      localStorage.setItem("folders", JSON.stringify(newFolders));
      setTitle("");
    }

    if (JSON.parse(localStorage.getItem("folders"))) {
      setCRFboxState("CRFhidden");
      setCRFlist("");
    } else {
      setCRFboxState("");
    }
  };


  const handleDeleteWebsite = (itemToRemove) => {
    console.log('Removing item:', itemToRemove);
   let folders = JSON.parse(localStorage.getItem("folders"));
    if (folders) {
      folders = folders.filter(item => item !== itemToRemove);
      console.log(folders)
      localStorage.setItem("folders", JSON.stringify(folders));
    }
  }
 
  return (
    <UserContext.Provider
      value={{
        ExtendSidebar,
        setExtendSidebar,
        CRFboxState,
        CRFlist,
        title,
        folders,
        articles,
        totalResults,
        updateNewsScroll,
        updateNews,
        handleCreateFolder,
        handleInputChange,
        handleDeleteWebsite
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserState;
