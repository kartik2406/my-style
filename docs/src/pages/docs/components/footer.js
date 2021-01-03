import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Footer",
  description:
    "Websites footer which can contain copyright information, links etc.",
}
const SECTIONS = [
  {
    id: "defaultFooter",
    title: "Default footer",
    description:
      "You can customize the footer height, its top margin using CSS variables",
    displayComponents: (
      <React.Fragment>
        <footer className="footer">
          <span> Footer content </span>
        </footer>
      </React.Fragment>
    ),
    markup: `<footer class="footer">
  <span> Footer content </span>
</footer>
`,
  },
  {
    id: "fixedFooter",
    title: "Fixed footer",
    description:
      "You can make make the footer stick to the bottom of the page too. Use the class 'footer--fixed'.",
    markup: `<footer class="footer footer--fixed">
  <span> Footer content </span>
</footer>
`,
  },
]
export default function Footer() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
