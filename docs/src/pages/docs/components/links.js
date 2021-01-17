import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"

const PAGE_INFO = {
  title: "Links",
  description:
    "Links are used to highlighting texts which will redirect the user to a part of your website or some external website.",
}
const SECTIONS = [
  {
    id: "basicLinks",
    title: "Basic links",
    description:
      "Basic links are displayed in the primary text colour of the site's theme. On hover, the colour of the link changes to the primary colour. You can also customize their hover colour using classes associated with other accent colours.",
    displayComponents: (
      <React.Fragment>
        <a className="link">Visit</a>
        <a className="link link--secondary">Visit</a>
        <a className="link link--tertiary">Visit</a>
      </React.Fragment>
    ),
    markup: `<a class="link">Visit</a>
<a class="link link--secondary">Visit</a>
<a class="link link--tertiary">Visit</a>`,
  },
  {
    id: "underLinedLinks",
    title: "Underlined links",
    description:
      "Underlined links have a border below them, the color of the border can be changed using classes mapping to the site's theme.",
    displayComponents: (
      <React.Fragment>
        <a className="link link--underline">Visit</a>
        <a className="link link--secondary link--underline">Visit</a>
        <a className="link link--tertiary link--underline">Visit</a>
      </React.Fragment>
    ),
    markup: `<a class="link link--underline">Visit</a>
<a class="link link--secondary link--underline">Visit</a>
<a class="link link--tertiary link--underline">Visit</a>`,
  },
  {
    id: "animatedLinks",
    title: "Animated links",
    description:
      "This style add an underline to the link on hover and removes it, it has a cool animation which makes the underline move when hovered on and off. The effects can be from left to right, from center, from right to left.",
    displayComponents: (
      <React.Fragment>
        <a className="link link--primary link--animated">Visit</a>
        <a className="link link--secondary link--animated link--animated--centerd">
          Visit
        </a>
        <a className="link link--tertiary link--animated link--animated--right">
          Visit
        </a>
      </React.Fragment>
    ),
    markup: `<a class="link link--primary link--animated">Visit</a>
<a class="link link--secondary link--animated link--animated--centerd">
  Visit
</a>
<a class="link link--tertiary link--animated link--animated--right">
  Visit
</a>`,
  },
  {
    id: "buttonLinks",
    title: "Button links",
    description:
      "You can also style the links as buttons using the button component classes.",
    displayComponents: (
      <React.Fragment>
        <a className="btn btn--primary">Visit</a>
        <a className="btn btn--solid-primary">Visit</a>
        <a className="btn btn--clear-secondary">Visit</a>
      </React.Fragment>
    ),
    markup: `<a class="link link--underline">Visit</a>
<a class="link link--secondary link--underline">Visit</a>
<a class="link link--tertiary link--underline">Visit</a>`,
  },
]
export default function Links() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
