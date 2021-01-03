import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Headings",
  description:
    "There are 6 different heading sizings that you can use, and these are already applied to the HTML tags h1, h2, h3, h4, h5, h6.",
}
const SECTIONS = [
  {
    id: "__headings",
    displayComponents: (
      <React.Fragment>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h1> This is a heading</h1>
          <h2> This is a heading</h2>
          <h3> This is a heading</h3>
          <h4> This is a heading</h4>
          <h5> This is a heading</h5>
          <h6> This is a heading</h6>
        </section>
      </React.Fragment>
    ),
    markup: `<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
<h4>This is a heading</h4>
<h5>This is a heading</h5>
<h6>This is a heading</h6>
`,
  },
]
export default function Headings() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
