import React, { useEffect, useState } from "react"

const LOCAL_STORAGE_KEY = "lightMode"
export default function ThemeToggle() {
  let [lightMode, setLightMode] = useState(false)
  useEffect(() => {
    let lightMode = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (lightMode) setLightMode(true)
  })
  const toggleDarkMode = () => {
    let currentMode = !lightMode
    let body = document.getElementsByTagName("body")[0]

    if (currentMode) {
      body.classList.add("light-theme")
      localStorage.setItem(LOCAL_STORAGE_KEY, true)
    } else {
      body.classList.remove("light-theme")
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
    setLightMode(currentMode)
  }
  return (
    <React.Fragment>
      <a className="link link--tertiary" onClick={toggleDarkMode}>
        <i class="material-icons">{lightMode ? "light_mode" : "dark_mode"}</i>
      </a>
    </React.Fragment>
  )
}
