import React from "react"
import Layout from "../components/layout"

export default function ChangeLog() {
  return (
    <Layout>
      <section className="container container--centered">
        <h2> Changelog </h2>
        <ul className="list">
          <li className="list__item">
            <div className="card">
              <div className="card__header">
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="release-version">v1.0.0 </span>
                  <span className="release-date" style={{ fontSize: "1rem" }}>
                    3rd January 2021
                  </span>
                </span>
              </div>
              <div className="card__body">
                This is the first release of the framework. The framework
                currently supports themes, basic components, helper classes.
                <ul className="list">
                  <li className="list__header">Available components</li>
                  <li className="list__item">Headings</li>
                  <li className="list__item">Buttons</li>
                  <li className="list__item">Links</li>
                  <li className="list__item">Card</li>
                  <li className="list__item">List</li>
                  <li className="list__item">Form</li>
                  <li className="list__item">Navbar</li>
                  <li className="list__item">Footer</li>
                  <li className="list__item">Progress bars</li>
                  <li className="list__item">Toast</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
