import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Navbar",
  description:
    "Websites header which can contain app name, logo, navigation links.",
}
const SECTIONS = [
  {
    id: "defaultNavbar",
    title: "Default Navbar",
    description: "You can customize the footer height using CSS variables.",
    displayComponents: (
      <React.Fragment>
        <header className="navbar">
          <div className="navbar__app">
            <i class="material-icons navbar__logo">extension</i>
            <h2 className="navbar__app__name">
              <a>AppName</a>
            </h2>
          </div>
          <section className="navbar__links">
            <a className="navbar__link link">About</a>
            <a className="navbar__link link">Docs</a>
          </section>
        </header>
      </React.Fragment>
    ),
    markup: `<header class="navbar">
  <div class="navbar__app">
    <i class="material-icons navbar__logo">extension</i>
    <h2 class="navbar__app__name">
      <a>AppName</a>
    </h2>
  </div>
  <section class="navbar__links">
    <a class="navbar__link link">About</a>
    <a class="navbar__link link">Docs</a>
  </section>
</header>
`,
  },
  {
    id: "centeredNavbar",
    title: "Centered Navbar content",
    description: "You can also center the content that is within the navbar",
    displayComponents: (
      <React.Fragment>
        <header className="navbar navbar--content-centered">
          <div className="navbar__app">
            <i class="material-icons navbar__logo">extension</i>
            <h2 className="navbar__app__name">
              <a>AppName</a>
            </h2>
          </div>
          <section className="navbar__links">
            <a className="navbar__link link">About</a>
            <a className="navbar__link link">Docs</a>
          </section>
        </header>
      </React.Fragment>
    ),
    markup: `<header class="navbar navbar--content-centered">
  <div class="navbar__app">
    <i class="material-icons navbar__logo">extension</i>
    <h2 class="navbar__app__name">
      <a>AppName</a>
    </h2>
  </div>
  <section class="navbar__links">
    <a class="navbar__link link">About</a>
    <a class="navbar__link link">Docs</a>
  </section>
</header>
`,
  },
  {
    id: "rightAligned",
    title: "Right-aligned Navbar ",
    description:
      "If you want to change the order in which logo and links are displayed",
    displayComponents: (
      <React.Fragment>
        <header className="navbar navbar-r-t-l">
          <div className="navbar__app">
            <i class="material-icons navbar__logo">extension</i>
            <h2 className="navbar__app__name">
              <a>AppName</a>
            </h2>
          </div>
          <section className="navbar__links">
            <a className="navbar__link link">About</a>
            <a className="navbar__link link">Docs</a>
          </section>
        </header>
      </React.Fragment>
    ),
    markup: `<header class="navbar navbar-r-t-l">
  <div class="navbar__app">
    <i class="material-icons navbar__logo">extension</i>
    <h2 class="navbar__app__name">
      <a>AppName</a>
    </h2>
  </div>
  <section class="navbar__links">
    <a class="navbar__link link">About</a>
    <a class="navbar__link link">Docs</a>
  </section>
</header>
`,
  },
  {
    id: "fixedNavbar",
    title: "Fixed Navbar ",
    description:
      "You can fix the navbar so that it's visible even when the page is scrolled. Use the class 'navbar--fixed'.",
    markup: `<header class="navbar navbar--fixed">
  <div class="navbar__app">
    <i class="material-icons navbar__logo">extension</i>
    <h2 class="navbar__app__name">
      <a>AppName</a>
    </h2>
  </div>
  <section class="navbar__links">
    <a class="navbar__link link">About</a>
    <a class="navbar__link link">Docs</a>
  </section>
</header>
`,
  },
]
export default function Navbar() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
