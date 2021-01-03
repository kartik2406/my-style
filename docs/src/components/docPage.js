import React from "react"
import Layout from "./layout"
import SideBar from "./sidebar"

export default function DocPage({ children }) {
  return (
    <Layout>
      <section className="container">
        <section className="content">
          <SideBar />
          <section className="content__main">
            <section className="doc-content content">{children}</section>
          </section>
        </section>
      </section>
    </Layout>
  )
}
