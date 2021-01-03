import React, { useEffect } from "react"
import DocPage from "../../../components/docPage"

export default function Introduction() {
  return (
    <DocPage>
      <section className="width-80">
        <section className="intro">
          <h2 className="heading"> Introduction </h2>
          <p>
            When working on my side projects, I realized that I often get slowed
            down by CSS, website design. Designing a website can be
            time-consuming and having a tool that can do it quickly is great.
            <br />
            <br />
            Also, a few bits of CSS is common throughout most of my projects,
            the colour scheme is the one that mostly differs. Hence I made this
            tiny framework that I can keep growing with my side projects. This
            also helped me learn and document CSS and is a great reference to
            have.
            <br />
            <br />
            The framework uses CSS variables which allows you to customize your
            websites theme, font-size etc. This way anyone can customize the
            style of their websites quickly and make it their own.
            <br />
            <br />
            Other frameworks I use and like are:&nbsp;
            <a
              className="link materialize-link"
              href="https://materializecss.com"
            >
              Materialize
            </a>
            ,&nbsp;
            <a className="link tailwind-link" href="https://tailwindcss.com/">
              Tailwind CSS
            </a>
            , &nbsp;
            <a className="link bootstrap-link" href="https://getbootstrap.com/">
              Bootstrap
            </a>
            . Tailwind CSS and Materialize being my most favourite. If you look
            closely, some of the elements in this framework are inspired by
            them. These frameworks are more battle-tested and have much more
            components. If you are looking for something more do check them out.
          </p>
        </section>
      </section>
    </DocPage>
  )
}
