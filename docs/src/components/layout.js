import React, { useEffect } from "react"
import { Link } from "gatsby"
import Prism from "prismjs"
import ThemeToggle from "./themeToggle"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  // TODO: know how to read OS preference of theme, add it here
  const setTheme = () => {
    let lightTheme = localStorage.getItem("lightMode")
    if (lightTheme) {
      let body = document.getElementsByTagName("body")[0]
      body.classList.add("light-theme")
    }
  }
  useEffect(() => {
    Prism.highlightAll()
    setTheme()
  }, [])
  const isPartiallyActive = props => {
    return props.location.href.includes("/docs")
      ? { className: "navbar__link link  link--active" }
      : { className: "navbar__link link" }
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>My Style</title>
      </Helmet>
      <header className="navbar">
        <div className="navbar__app">
          <img className="navbar__logo" src="/logo.png" />
          <h2 className="navbar__app__name">
            <Link to="/">MyStyle</Link>
          </h2>
        </div>
        <section className="navbar__links">
          <ThemeToggle />
          <Link
            to="/docs/getting-started/introduction"
            className="navbar__link link"
            activeClassName="link--active"
            getProps={isPartiallyActive}
          >
            Documentation
          </Link>
          <Link
            to="/changelog"
            className="navbar__link link"
            activeClassName="link--active"
          >
            Changelog
          </Link>
        </section>
      </header>
      <main>{children}</main>
      <footer className="footer centered">
        <span>
          Designed by &nbsp;
          <a
            className="link  link--tertiary link--underline"
            href="https://github.com/kartik2406"
          >
            Kartik Malik{" "}
          </a>
        </span>
        <span> Current version: 1.0.0</span>
        <span>License: MIT</span>
      </footer>
    </React.Fragment>
  )
}
