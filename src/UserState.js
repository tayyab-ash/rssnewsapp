import React from "react";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserState({ children }) {
  const [CRFboxState, setCRFboxState] = useState("");
  const [CRFlist, setCRFlist] = useState("CRFhidden");
  const [title, setTitle] = useState("");
  const [dfolders, setdFolders] = useState([]);
  const [ExtendSidebar, setExtendSidebar] = useState(null);

  const [articles, setarticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);


  const [folders, setfolders] = useState([]);


  const [catLink, setcatLink] = useState('')
  const [currentKey, setCurrentKey] = useState(() => {
    // Retrieve the key from localStorage, or default to null
    return localStorage.getItem('currentKey') || null;
  });



 

  const updateNews = async () => {
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9df1537409244622aae4a9c4316f3986`;
    // setloading(true);
    let data = await fetch(url);
    // props.setProgress(40);
    let parseData = await data.json();
    console.log(parseData);

    // props.setProgress(70);
    setarticles(parseData.articles);
    // console.log(articles)
    settotalResults(parseData.totalResults);
    // setloading(false)
    // props.setProgress(100);
  };

  const updateNewsScroll = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9df1537409244622aae4a9c4316f3986`;
      // setloading(true)
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      setarticles(articles.concat(parseData.articles))
      settotalResults(parseData.totalResults)
      // setloading(false)
      // setpage(page+1)
  }


  const [categories, setcategories] = useState([]);

  const fetchCatagories = async () => {
    const response = await fetch(
      "http://localhost:3000/api/catagories/fetchcategory"
    );
    const data = await response.json();
    const mainData = data["0"];
    setcategories(mainData.categories);
  };


  const fetchFolders = async () => {
    const response = await fetch(
      "http://localhost:3000/api/folders/getfolders"
    );
    const data = await response.json();
    const mainData = data["0"];
    setfolders(mainData.folders);
  };


  useEffect(() => {
    fetchCatagories();
    fetchFolders();
    // updateNews();
    const storedFolders = JSON.parse(localStorage.getItem("dfolders")) || [];
    const storedSidebarState = JSON.parse(localStorage.getItem("Sidebar"));
    setExtendSidebar(storedSidebarState !== null ? storedSidebarState : false);
    setdFolders(storedFolders);
    
    if (folders) {
      setCRFboxState("CRFhidden");
      setCRFlist("");
    } else {
      setCRFboxState("");
    }
  }, [folders]);

  useEffect(() => {
    updateNews();
  }, [])
  

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCreateFolder = () => {
    if (title.trim()) {
      const newFolders = [...dfolders, title];
      setdFolders(newFolders);
      localStorage.setItem("dfolders", JSON.stringify(newFolders));
      setTitle("");
    }

    if (folders) {
      setCRFboxState("CRFhidden");
      setCRFlist("");
    } else {
      setCRFboxState("");
    }
  };


  const handleDeleteWebsite = (itemToRemove) => {
    console.log('Removing item:', itemToRemove);
   let dfolders = JSON.parse(localStorage.getItem("dfolders"));
    if (dfolders) {
      dfolders = dfolders.filter(item => item !== itemToRemove);
      console.log(dfolders)
      localStorage.setItem("dfolders", JSON.stringify(dfolders));
    }
  }
 
  return (
    <UserContext.Provider
      value={{
        ExtendSidebar,
        CRFboxState,
        CRFlist,
        title,
        dfolders,
        articles,
        totalResults,
        folders,
        catLink,
        currentKey, 
        categories,
        setExtendSidebar,
        updateNews,
        updateNewsScroll,
        fetchFolders,
        setcatLink,
        setCurrentKey,
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
