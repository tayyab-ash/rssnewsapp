import React from "react";
import ThemeContext from "./ThemeContext";
import { useState } from "react";
// import styled from "styled-components";
import themecss from "./ThemeState.css"

function ThemeState(props) {
  const [theme, settheme] = useState("dark");
  const [btnTheme, setbtnTheme] = useState("btndark");
  const [btn2Theme, setbtn2Theme] = useState("btn2dark");
  const [headingTheme, setheadingTheme] = useState("headingsDark")
  const [animation, setanimation] = useState("fade-up")

  // const light = styled.div`
  //   background: linear-gradient(210deg, white, rgba(255, 255, 255, 0) 35%),
  //     linear-gradient(180deg, #fbb2447a, rgb(0, 0, 0, 0%) 16%),
  //     linear-gradient(280deg, white, rgba(255, 255, 255, 0) 40%),
  //     linear-gradient(230deg, #4151ff, rgb(0, 0, 255, 0%) 30%);
  // `;

  const themeDark = () => {
    document.body.classList.remove("light");
    settheme("dark");
    setbtnTheme("btndark");
    setbtn2Theme("btn2dark");
    setheadingTheme("headingsDark")
    setanimation('')
  };

  const themeLight = () => {
    document.body.classList.add("light");
    settheme("light");
    setbtnTheme("btnlight");
    setbtn2Theme("btn2light");
    setheadingTheme("headingsLight")
    setanimation('')
  };

  return (
    <ThemeContext.Provider value={{ theme, btnTheme, btn2Theme, headingTheme,animation, themeDark, themeLight }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeState;
