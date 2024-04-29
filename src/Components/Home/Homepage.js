import React from "react";
import { useContext, useEffect } from "react";
import themeContext from "../Context/Theme/ThemeContext";
import Sidebar from "./Sidebar";
import MainFeedPage from "./MainFeedPage";
import styles from "./Homepage.module.css";

function Homepage() {
  const mode = useContext(themeContext);
  useEffect(() => {
    if (mode.theme === "dark") {
      document.body.style.background = "#171720";
    } else {
      document.body.style.background = "white";
    }
    return () => {
      document.body.style.background = "";
      // document.body.style.background = bg.theme
    };
  }, [mode.theme]);

  return (
    <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <MainFeedPage />
        </div>
    </div>
  );
}

export default Homepage;
