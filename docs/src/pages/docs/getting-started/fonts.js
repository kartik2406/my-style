import { Link } from "gatsby"
import React from "react"
import DocPage from "../../../components/docPage"

let fontStyleVar = `:root {
  --base-font-family: "Chivo", sans-serif;
}`
export default function Concepts() {
  return (
    <DocPage>
      <section className="width-80">
        <h2> Fonts </h2>
        <section className="doc-section">
          <p>
            I like 'Nunito' font and have used it in the framework. In some
            projects, I might want to experiment with some new font. Because of
            this the framework does not import any font by default and leaves
            the choice up to the user. You can easily set it up in your project,
            just follow the steps on &nbsp;
            <a
              className="link googlefonts-link"
              href="https://fonts.google.com/specimen/Nunito"
            >
              Google fonts
            </a>
            &nbsp; website.
          </p>
        </section>
        <section className="doc-section">
          <h5> Customizing font style </h5>
          <p>
            Just select your favourite font, add it into your style and change
            the base font CSS variable and the font will get applied throughout
            your site.
          </p>
          <pre>
            <code className="language-css">{fontStyleVar}</code>
          </pre>
          <p>
            You could also have different font based on the theme, to learn more
            about themes refer &nbsp;
            <Link
              to="/docs/getting-started/themes"
              className="link link--primary link--underline"
            >
              Themes
            </Link>
            &nbsp; section.
          </p>
        </section>
        <section className="doc-section">
          <h5> Icon fonts </h5>
          <p>
            To make icon styling easier the framework recommends using google
            icons. These icons also look nice. As with text fonts though the
            framework does not import any icon fonts by default and the user is
            free to use any they like.
          </p>
          <p>
            Refer the &nbsp;
            <Link
              to="/docs/getting-started/setup"
              className="link link--tertiary link--underline"
            >
              Setup
            </Link>
            &nbsp; section to read to know set up fonts and icons.
          </p>
        </section>
      </section>
    </DocPage>
  )
}
