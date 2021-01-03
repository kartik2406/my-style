import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Content",
  description:
    "The following classes are wrapper classes that you can use to create a layout, give margin to the entire content.",
}

const SECTIONS = [
  {
    id: "container",
    title: "Container",
    description: "Simple wrapper arround your content",
    displayComponents: (
      <React.Fragment>
        <div className="container">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga,
          corporis, saepe quia tempora eveniet quaerat debitis cumque nulla
          vitae, libero eos. Fugit, dolore. Dolorem, accusamus maiores. Quo,
          asperiores minima.
        </div>
      </React.Fragment>
    ),
    markup: `<div class="container">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
   Nisi fuga, corporis,
  saepe quia tempora eveniet quaerat debitis cumque nulla vitae,
   libero eos.
  Fugit, dolore. Dolorem, accusamus maiores. Quo, asperiores minima.
</div>`,
  },
  {
    id: "containerCentered",
    title: "Container centered",
    description: "Adds left and right padding arround your content.",
    displayComponents: (
      <React.Fragment>
        <div className="container container--centered">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fuga,
          corporis, saepe quia tempora eveniet quaerat debitis cumque nulla
          vitae, libero eos. Fugit, dolore. Dolorem, accusamus maiores. Quo,
          asperiores minima.
        </div>
      </React.Fragment>
    ),
    markup: `<div class="container container--centered">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
  Nisi fuga, corporis,
  saepe quia tempora eveniet quaerat debitis cumque nulla vitae,
   libero eos.
  Fugit, dolore. Dolorem, accusamus maiores. Quo, asperiores minima.
</div>
`,
  },
  {
    id: "content",
    title: "Content",
    description:
      "The content class allows you to defined 2 columned layouts. The two columns are called main and aside. Different use cases are:  when you want sidebar next to your main content, blog post and blog post lists. You can also nest them within one another for complex layouts, this is how this site displays navigation links on the left, content in the middle, within page navigation links on the right. Flexbox is used to display the component, so the content would appear in the order that you place them in markup.",
    displayComponents: (
      <React.Fragment>
        <div className="content">
          <div
            className="content__main centered"
            style={{
              height: "100px",
              background: "Azure",
              opacity: 0.8,
              color: "#333",
            }}
          >
            Main Content
          </div>
          <div
            className="content__aside centered"
            style={{
              height: "100px",
              background: "AliceBlue",
              opacity: 0.8,
              color: "#333",
            }}
          >
            Aside Content
          </div>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="content">
  <div class="content__main">Main Content</div>
  <div class="content__aside">Aside Content</div>
</div>
`,
  },
  {
    id: "__content2",
    description:
      "To display aside content on the left, main content on the right",
    displayComponents: (
      <React.Fragment>
        <div className="content">
          <div
            className="content__aside centered"
            style={{
              height: "100px",
              background: "AliceBlue",
              opacity: 0.8,
              color: "#333",
            }}
          >
            Aside Content
          </div>
          <div
            className="content__main centered"
            style={{
              height: "100px",
              background: "Azure",
              opacity: 0.8,
              color: "#333",
            }}
          >
            Main Content
          </div>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="content">
  <div class="content__main">Main Content</div>
  <div class="content__aside">Aside Content</div>
</div>
`,
  },
  {
    id: "__content3",
    description: "Example with 3 columns",
    displayComponents: (
      <React.Fragment>
        <div className="content">
          <div
            className="content__aside centered"
            style={{
              height: "100px",
              background: "AliceBlue",
              opacity: 0.8,
              color: "#333",
            }}
          >
            Aside Content
          </div>
          <div className="content__main">
            <div className="content">
              <div
                className="content__main centered"
                style={{
                  height: "100px",
                  background: "Azure",
                  opacity: 0.8,
                  color: "#333",
                }}
              >
                Main Content
              </div>
              <div
                className="content__aside centered"
                style={{
                  height: "100px",
                  background: "GhostWhite",
                  opacity: 0.8,
                  color: "#333",
                }}
              >
                Aside
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="content">
  <div class="content__main">Main Content</div>
  <div class="content__aside">Aside Content</div>
</div>
`,
  },
]
export default function Content() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
