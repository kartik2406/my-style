import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"

const PAGE_INFO = {
  title: "Buttons",
  description:
    "There are different styles you can choose from to match the style of your website. You can select from basic, solid, clear. There are also classes for primary, secondary, tertiary colours so you can change the colour of the button to your theme easily. All the buttons have a zoom-in animation on hover.",
}

const SECTIONS = [
  {
    id: "defaultButtons",
    title: "Default buttons",
    description:
      "Default buttons can be used when you want to keep the action subtle but noticeable. The different colour styles are related to the theme of your website: primary text colour, primary, secondary, tertiary accent colours.",
    displayComponents: (
      <React.Fragment>
        <button className="btn">Action</button>
        <button className="btn btn--primary">Action</button>
        <button className="btn btn--secondary">Action</button>
        <button className="btn btn--tertiary">Action</button>
      </React.Fragment>
    ),
    markup: `<button class="btn">Action</button>
<button class="btn btn--primary">Action</button>
<button class="btn btn--secondary">Action</button>
<button class="btn btn--tertiary">Action</button>`,
  },
  {
    id: "solidButtons",
    title: "Solid buttons",
    description:
      "Solid buttons have your themes primary, secondary, tertiary colour as the background",
    displayComponents: (
      <React.Fragment>
        <button className="btn btn--solid-primary">Action</button>
        <button className="btn btn--solid-secondary">Action</button>
        <button className="btn btn--solid-tertiary">Action</button>
      </React.Fragment>
    ),
    markup: `<button class="btn btn--solid-primary">Action</button>
<button class="btn btn--solid-secondary">Action</button>
<button class="btn btn--solid-tertiary">Action</button>`,
  },
  {
    id: "clearButtons",
    title: "Clear buttons",
    description:
      "If Solid button is not your style you can opt for these. Instead of background they have a border corresponding to your theme colours. On hover, they get filled with the theme colour.",
    displayComponents: (
      <React.Fragment>
        <button className="btn btn--clear-primary">Action</button>
        <button className="btn btn--clear-secondary">Action</button>
        <button className="btn btn--clear-tertiary">Action</button>
      </React.Fragment>
    ),
    markup: `<button class="btn btn--clear-primary">Action</button>
<button class="btn btn--clear-secondary">Action</button>
<button class="btn btn--clear-tertiary">Action</button>`,
  },
  {
    id: "iconButtons",
    title: "Icon buttons",
    description:
      "You can add any google icon fonts inside the button tag as content to create icon buttons. You can also have icons and text as the content of a button.",
    displayComponents: (
      <React.Fragment>
        <button className="btn">
          <i className="material-icons">favorite</i>
        </button>
        <button className="btn btn--solid-primary">
          <i className="material-icons">favorite</i>
        </button>
        <button className="btn btn--clear-tertiary">
          <i className="material-icons">favorite</i>
        </button>
        <button className="btn btn--solid-primary btn--circle">
          <i className="material-icons">favorite</i>
        </button>
        <button className="btn btn--solid-primary">
          <i className="material-icons">favorite</i> Like
        </button>
      </React.Fragment>
    ),
    markup: `<button class="btn">
  <i class="material-icons">favorite</i>
</button>

<button class="btn btn--solid-primary">
  <i class="material-icons">favorite</i>
</button>

<button class="btn btn--clear-tertiary">
  <i class="material-icons">favorite</i>
</button>

<button class="btn btn--solid-primary btn--round">
  <i class="material-icons">favorite</i>
</button>

<button class="btn btn--solid-primary">
  <i class="material-icons">favorite</i> Like
</button>`,
  },
  {
    id: "roundedButtons",
    title: "Rounded buttons",
    description:
      "Instead of square-shaped buttons, you can have buttons with rounded sides.",
    displayComponents: (
      <React.Fragment>
        <button className="btn btn--solid-primary btn--rounded">Action</button>
        <button className="btn btn--solid-tertiary btn--rounded">Action</button>
      </React.Fragment>
    ),
    markup: `<button class="btn btn--solid-primary btn--rounded">Action</button>
<button class="btn btn--solid-tertiary btn--rounded">Action</button>`,
  },
  {
    id: "largeButton",
    title: "Large button",
    description:
      "At times you might want buttons that stand out, for those you can use large buttons. You can make any of the above buttons large buttons.",
    displayComponents: (
      <React.Fragment>
        <button className="btn btn--large">Action</button>
        <button className="btn btn--solid-primary btn--large">Action</button>
        <button className="btn btn--clear-tertiary btn--large">Action</button>
        <button className="btn btn--solid-primary btn--circle btn--large">
          <i className="material-icons">favorite</i>
        </button>
      </React.Fragment>
    ),
    markup: `<button class="btn btn--large">Action</button>
<button class="btn btn--solid-primary btn--large">Action</button>
<button class="btn btn--clear-tertiary btn--large">Action</button>
<button class="btn btn--solid-primary btn--circle btn--large">
  <i class="material-icons">favorite</i>
</button>
`,
  },
  {
    id: "disabledButtons",
    title: "Disabled buttons",
    description:
      "If you add the class <i> btn--disabled </i> to a button it will disable pointer-events on it, as well as change its styling. You can apply this to all types of buttons.",
    displayComponents: (
      <React.Fragment>
        <button className="btn btn--disabled">Action</button>
        <button className="btn btn--solid-primary btn--disabled">Action</button>
        <button className="btn btn--clear-tertiary btn--disabled">
          Action
        </button>
        <button className="btn btn--solid-primary btn--round btn--disabled">
          <i className="material-icons">favorite</i>
        </button>
        <button className="btn btn--solid-primary btn--rounded btn--disabled">
          Action
        </button>
        <button className="btn btn--clear-tertiary btn--large btn--disabled">
          Action
        </button>
      </React.Fragment>
    ),
    markup: `<button class="btn btn--disabled">Action</button>
<button class="btn btn--solid-primary btn--disabled">Action</button>
<button class="btn btn--clear-tertiary btn--disabled">Action</button>
<button class="btn btn--solid-primary btn--round btn--disabled">
  <i class="material-icons">favorite</i>
</button>
<button class="btn btn--solid-primary btn--rounded btn--disabled">
  Action
</button>
<button class="btn btn--clear-tertiary btn--large btn--disabled">
  Action
</button>`,
  },
]
export default function Buttons() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
