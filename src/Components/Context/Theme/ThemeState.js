import React from 'react'
import ThemeContext from "./ThemeContext"
import { useState } from 'react';

function ThemeState(props) {

const [theme, settheme] = useState()
const [lightactive, setlightactive] = useState()
const [darkactive, setdarkactive] = useState()


const themeDark = () =>{
  settheme(document.body.style.background = '')
  setdarkactive("active")
  setlightactive()
}
  const themeLight=()=>{
    settheme(document.body.style.background = "white")
    setlightactive("active")
    setdarkactive()
  }

  return (
    <ThemeContext.Provider value={{theme, lightactive, darkactive, themeDark, themeLight}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState