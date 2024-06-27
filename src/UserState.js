import React from "react";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserState({ children }) {
  // Manages the state of Create folder dialog box hiddenn/show
  const [CRFboxState, setCRFboxState] = useState("");
  // Manages the state of list of Folders hidden/show
  const [CRFlist, setCRFlist] = useState("CRFhidden");
  
  const [title, setTitle] = useState("");
  const [dfolders, setdFolders] = useState([]);
  const [ExtendSidebar, setExtendSidebar] = useState(null);
  const [articles, setarticles] = useState([]);
  const [totalResults, settotalResults] = useState(0);
  const [folders, setfolders] = useState([]);
  const [catLink, setcatLink] = useState("");

  const [currentKey, setCurrentKey] = useState(() => {
    return localStorage.getItem("currentKey") || null;
  });

  const [feedPageTitle, setfeedPageTitle] = useState(() => {
    const storedState = localStorage.getItem("feedPageTitle");
    return storedState ? JSON.parse(storedState) : {};
  });

  useEffect(() => {
    localStorage.setItem("feedPageTitle", JSON.stringify(feedPageTitle));
  }, [feedPageTitle]);

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

  const updateNewsScroll = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9df1537409244622aae4a9c4316f3986`;
    // setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
    // setloading(false)
    // setpage(page+1)
  };

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
    // console.log("this is folders",folders)
  };

  const [currentFeed, setCurrentFeed] = useState(() => {
    return localStorage.getItem("currentFeed") || null;
  });
  const [rssFeed, setRssFeed] = useState([]);

  const fetchRss = async () => {
    const response = await fetch("http://localhost:3000/api/feed/fetchrss");
    const data = await response.json();
    const filteredRss = data.filter(
      (element) => element.source_name === currentFeed
    );
    setRssFeed(filteredRss);
  };

  useEffect(() => {
    console.log(currentFeed);
    if (currentFeed !== null) {
      localStorage.setItem("currentFeed", currentFeed);
    }
    // eslint-disable-next-line
    fetchRss();
    // eslint-disable-next-line
  }, [currentFeed]);

  useEffect(() => {}, [feedPageTitle]);

  useEffect(() => {
    fetchFolders();
    fetchCatagories();
    const storedSidebarState = JSON.parse(localStorage.getItem("Sidebar"));
    setExtendSidebar(storedSidebarState !== null ? storedSidebarState : false);
    if (folders) {
      setCRFboxState("CRFhidden");
      setCRFlist("");
    } else {
      setCRFboxState("");
    }
  }, [folders]);

  useEffect(() => {
    updateNews();
  }, []);

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
        feedPageTitle,
        rssFeed,
        currentFeed,
        setCurrentFeed,
        setfeedPageTitle,
        setExtendSidebar,
        updateNews,
        updateNewsScroll,
        fetchFolders,
        setcatLink,
        setCurrentKey,
        handleCreateFolder,
        handleInputChange,
        // handleDeleteWebsite
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserState;
