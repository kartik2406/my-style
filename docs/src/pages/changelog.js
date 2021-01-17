import React from "react"
import ChangeLogCard from "../components/changelogCard"
import Layout from "../components/layout"

const RELEASE_DETAILS = [
  {
    version: "1.0.3",
    releaseDate: "17th January 2021",
    releaseSummary:
      "Animated links, responsive style to container, select input styling, bug fixes.",
    changes: (
      <ul className="list">
        <li className="list__item">
          Container class width is configurable and doesn't cover the whole
          width on larger screens
        </li>
        <li className="list__item">Float helpers</li>
        <li className="list__item">Documentation fixes</li>
        <li className="list__item">Copy to clipboard button</li>
        <ul className="list">
          <li className="list__header">New Components</li>
          <li className="list__item">Links: Animated links</li>
          <li className="list__item">Form: Select input </li>
        </ul>
      </ul>
    ),
  },
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
      <section className="container">
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
