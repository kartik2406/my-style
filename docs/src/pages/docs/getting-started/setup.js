import React from "react"
import DocPage from "../../../components/docPage"

let importViaHTML = `<!-- Minified file -->
<link rel="stylesheet" href="./node_modules/my-style/dist/index.css" />
<!-- or the source file -->
<link rel="stylesheet" href="./node_modules/my-style/src/css/index.css" />
`
let omportViaCSS = `/* Minified file */
@import "./node_modules/my-style/dist/index.css";
/* or the source file */
@import "./node_modules/my-style/src/css/index.css";`

let googleFontImportHTML = `<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">`

let googleFontImportCSS = `@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');`
export default function Setup() {
  return (
    <DocPage>
      <section className="width-80">
        <h2>Setup</h2>
        <section className="doc-section">
          <h5> Installation </h5>
          <p>
            To install my styles, you can either download the source files from
            the github repo or install the npm package.
          </p>
          <pre>
            <code className="language-javascript">npm i my-styles</code>
          </pre>
          <p>
            After that you can simply import the my styles CSS file in your html
            or css files.
          </p>
          <p> Importing via HTML</p>
          <pre>
            <code className="language-markup">{importViaHTML}</code>
          </pre>
          <p> Importing via CSS </p>
          <pre>
            <code className="language-css">{omportViaCSS}</code>
          </pre>
          <h5> Adding Google fonts </h5>
          <p> Importing via HTML</p>
          <pre>
            <code className="language-markup">{googleFontImportHTML}</code>
          </pre>
          <p> Importing via CSS </p>
          <pre>
            <code className="language-css">{googleFontImportCSS}</code>
          </pre>
          Visit &nbsp;
          <a
            className="link googlefonts-link"
            href="https://fonts.google.com/specimen/Nunito?sidebar.open=true&selection.family=Nunito"
          >
            Google fonts
          </a>
          &nbsp; page to know more.
          <h5> Adding Google icons </h5>
          <p> Importing via HTML</p>
          <pre>
            <code className="language-markup">{googleFontImportHTML}</code>
          </pre>
          <p> Importing via CSS </p>
          <pre>
            <code className="language-css">{googleFontImportCSS}</code>
          </pre>
          Visit &nbsp;
          <a
            className="link googleicons-link {"
            href="https://google.github.io/material-design-icons/"
          >
            Google material icons
          </a>
          &nbsp; page to know more.
          <h5> Using Prism to style code blocks </h5>
          <p>
            Download the JS and CSS bundle from &nbsp;
            <a className="link prism-link" href="https://prismjs.com/">
              Prism
            </a>
            &nbsp; site and import them in your project.
          </p>
        </section>
      </section>
    </DocPage>
  )
}
