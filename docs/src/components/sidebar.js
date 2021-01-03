import { Link } from "gatsby"
import React from "react"

export default function SideBar() {
  return (
    <section className="content__aside">
      <section className="sidebar-navigation">
        <ul className="list list--links">
          <li className="list__header"> Getting started</li>
          <li className="list__item">
            <Link
              to="/docs/getting-started/introduction"
              className="link"
              activeClassName="link--active"
            >
              Introduction
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/getting-started/concepts"
              className="link"
              activeClassName="link--active"
            >
              Concepts
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/getting-started/setup"
              className="link"
              activeClassName="link--active"
            >
              Setup
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/getting-started/themes"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Themes
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/getting-started/fonts"
              className="link"
              activeClassName="link--active"
            >
              Fonts
            </Link>
          </li>
        </ul>
        <ul className="list list--links">
          <li className="list__header"> Layout</li>
          <li className="list__item">
            <Link
              to="/docs/layout/content"
              className="link"
              activeClassName="link--active"
            >
              Content
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/layout/helpers"
              className="link"
              activeClassName="link--active"
            >
              Helpers
            </Link>
          </li>
        </ul>
        <ul className="list list--links">
          <li className="list__header">Components</li>
          <li className="list__item">
            <Link
              to="/docs/components/headings"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Headings
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/buttons"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Buttons
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/links"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Links
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/card"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Card
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/list"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              List
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/form"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Form
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/navbar"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Navbar
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/footer"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Footer
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/progress-bars"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Progress bar
            </Link>
          </li>
          <li className="list__item">
            <Link
              to="/docs/components/toast"
              className="link"
              activeClassName="link--active"
              partiallyActive={true}
            >
              Toast
            </Link>
          </li>
        </ul>
      </section>
    </section>
  )
}
