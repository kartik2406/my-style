import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Helpers",
  description: "The follwoing classes are helper classes",
}

const SECTIONS = [
  {
    id: "center",
    title: "Center content",
    description:
      "You can use the following class to center the content within an element",
    displayComponents: (
      <React.Fragment>
        <div
          className="centered"
          style={{
            width: "100%",
            height: "100px",
            background: "AliceBlue",
            opacity: 0.8,
            color: "#333",
          }}
        >
          Sample text
        </div>
      </React.Fragment>
    ),
    markup: `<div class="centered">Sample text</div>`,
  },
  {
    id: "colors",
    title: "Colors",
    description: "Classes for each of the themes accent color",
    displayComponents: (
      <React.Fragment>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <span className="primary"> This text is in primary color</span>
          <span className="secondary"> This text is in secondary color</span>
          <span className="tertiary"> This text is in tertiary color</span>
        </section>
      </React.Fragment>
    ),
    markup: `<span class="primary"> This text is in primary color</span>
<span class="secondary"> This text is in secondary color</span>
<span class="tertiary"> This text is in tertiary color</span>`,
  },
  {
    id: "background",
    title: "Background colors",
    description:
      "Classes for each of the themes accent color as background color",
    displayComponents: (
      <React.Fragment>
        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <span className="background-primary">
            This background is primary color
          </span>
          <span className="background-secondary">
            This background is secondary color
          </span>
          <span className="background-tertiary">
            This background is tertiary color
          </span>
        </section>
      </React.Fragment>
    ),
    markup: `<span class="background-primary"> This background is primary color </span>
<span class="background-secondary">
  This background is secondary color
</span>
<span class="background-tertiary"> This background is tertiary color
 </span>`,
  },
  {
    id: "floats",
    title: "Floats",
    description: "Classes to easily position elements to left or right",
    displayComponents: (
      <React.Fragment>
        <section style={{ width: "100%" }}>
          <span className="float-left">Text on Left side</span>
        </section>
      </React.Fragment>
    ),
    markup: ` <span class="float-left">Text on Left side</span>`,
  },
  {
    id: "__floats",
    displayComponents: (
      <React.Fragment>
        <section style={{ width: "100%" }}>
          <span className="float-right">Text on Right side</span>
        </section>
      </React.Fragment>
    ),
    markup: `<span class="float-right">Text on Right side</span>`,
  },
]
export default function Helpers() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
