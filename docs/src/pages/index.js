import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className="container">
        <h3 className="headline centered" style={{ fontSize: "3rem" }}>
          Give your projects your own style!
        </h3>
        <p className="sub-text" style={{ fontSize: "1.8rem" }}>
          When working with different projects, styling them can slow you down.
          Using my style allows you to create your configurable web style. Use
          the colour scheme & fonts variables style your projects however you
          like!
        </p>

        <section className="landing-page-actions">
          <Link
            to="/docs/getting-started/setup"
            className="btn btn--solid-primary btn--large"
          >
            Get Started
          </Link>
        </section>
      </section>
    </Layout>
  )
}
