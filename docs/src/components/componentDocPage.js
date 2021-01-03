import React from "react"
import DocPage from "./docPage"
import PageSection from "./pageSection"

export default function ComponentDocPage({ pageInfo, sections, children }) {
  return (
    <DocPage>
      <section className="content__main">
        <section className="wrapper">
          <section className="intro">
            <h2> {pageInfo.title}</h2>
            <p> {pageInfo.description}</p>
          </section>
          {sections.map(section => {
            return (
              <section className="doc-section" id={section.id} key={section.id}>
                <h5> {section.title}</h5>
                <p> {section.description} </p>
                <section className="display-components">
                  {section.displayComponents}
                </section>
                <pre>
                  <code className="language-markup">{section.markup}</code>
                </pre>
              </section>
            )
          })}
        </section>
      </section>
      <PageSection links={sections} />
      {children}
    </DocPage>
  )
}
