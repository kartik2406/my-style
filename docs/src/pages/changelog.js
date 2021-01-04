import React from "react"
import ChangeLogCard from "../components/changelogCard"
import Layout from "../components/layout"

const RELEASE_DETAILS = [
  {
    version: "1.0.1 - 1.0.2",
    releaseDate: "4th January 2021",
    releaseSummary: "Some bug fixes, document fixes",
    changes: (
      <ul className="list">
        <li className="list__item">
          Adding proper documentation link in the readme file.
        </li>
        <li className="list__item">
          Link class having extra underline in older browser versions.
        </li>
      </ul>
    ),
  },
  {
    version: "1.0.0",
    releaseDate: "3rd January 2021",
    releaseSummary:
      "This is the first release of the framework. The framework currently supports themes, basic components, helper classes.",
    changes: (
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
    ),
  },
]
export default function ChangeLog() {
  return (
    <Layout>
      <section className="container container--centered">
        <h2> Changelog </h2>
        <ul className="list">
          {RELEASE_DETAILS.map(details => (
            <ChangeLogCard key={details.version} {...details} />
          ))}
        </ul>
      </section>
    </Layout>
  )
}
