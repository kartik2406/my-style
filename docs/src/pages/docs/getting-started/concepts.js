import React from "react"
import DocPage from "../../../components/docPage"

export default function Concepts() {
  return (
    <DocPage>
      <section className="width-80">
        <h2> Concepts</h2>
        <section className="doc-section">
          <h5> CSS class naming convention </h5>
          <p>
            Keeping maintainability in mind, the framework follows the BEM
            naming convention. This will make sure that when new components are
            added in future it won't affect the existing ones. Also changing one
            class won't alter another non-dependent class,
          </p>
        </section>

        <section className="doc-section">
          <h5> Usage of CSS variables</h5>
          <p>
            CSS has gotten so many features in the past few years that you don't
            need preprocessors for most of your tasks. CSS variables are one of
            them and are great for storing repeating elements in your style
            sheets such as colours, fonts, sizes, padding. This way if you want
            to change something you can simply change the value of the variable
            and you are good to go
          </p>
        </section>
        <section className="doc-section">
          <h5> Styling code blocks</h5>
          <p>
            For use cases such as blogs and documentation sites, we need to
            display code blocks. This would turn out to be very complex, good
            the thing for us there is this amazing library called &nbsp;
            <a
              className="link prism-link"
              href="https://prismjs.com/download.html#themes=prism-dark&languages=markup+css+clike+javascript"
              rel="noreferrer"
              target="_blank"
            >
              Prism
            </a>
            . This library will take care of our code doc parsing and styling.
          </p>
        </section>
      </section>
    </DocPage>
  )
}
