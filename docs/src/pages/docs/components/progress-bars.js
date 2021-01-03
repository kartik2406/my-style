import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"

const PAGE_INFO = {
  title: "Progress bars",
  description:
    "Progress bars are useful to convey to the user that some action is being performed.",
}
const SECTIONS = [
  {
    id: "progressStatus",
    title: "Progress status",
    description:
      "Pass the status % of the task being performed as width, as the task progress the progress bar will keep filling.",
    displayComponents: (
      <React.Fragment>
        <div class="progress-bar">
          <div class="progress-bar__status" style={{ width: "80%" }}></div>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="progress-bar">
  <div class="progress-bar__status" style="width: 80%"></div>
</div>`,
  },
  {
    id: "infiniteProgressbar",
    title: "Infinite Progress bar",
    description:
      "You can also display a progress bar which keeps running infinitely. Once the task is completed you can simply remove or delete the component markup.",
    displayComponents: (
      <React.Fragment>
        <div class="progress-bar progress-bar--infinite">
          <div class="progress-bar__status"></div>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="progress-bar progress-bar--infinite">
  <div class="progress-bar__status"></div>
</div>`,
  },
  {
    id: "pulseDots",
    title: "Pulse dot",
    description:
      "The pulse dot keeps running and you can display it when you are doing some task. By default its shown in the sites primary theme colour, you can also have pulse dots for your sites secondary and tertiary theme colour.",
    displayComponents: (
      <React.Fragment>
        <div class="pulse-dot"></div>
        <div class="pulse-dot pulse-dot--secondary"></div>
        <div class="pulse-dot pulse-dot--tertiary"></div>
      </React.Fragment>
    ),
    markup: ` <div class="pulse-dot"></div>`,
  },
  {
    id: "__pulseDots2",

    description:
      "There are three sizes to choose from the default(small), medium, large.",
    displayComponents: (
      <React.Fragment>
        <section className="centered pulse-centered">
          <div class="pulse-dot pulse-dot--medium"></div>
        </section>
      </React.Fragment>
    ),
    markup: `<div class="pulse-dot pulse-dot--medium"></div>`,
  },
  {
    id: "__pulseDots3",
    displayComponents: (
      <React.Fragment>
        <section className="centered pulse-centered">
          <div class="pulse-dot pulse-dot--large"></div>
        </section>
      </React.Fragment>
    ),
    markup: `<div class="pulse-dot pulse-dot--large"></div>`,
  },
  {
    id: "__pulseDots4",
    description:
      "You can also change the size, colour to something of your liking.",
    displayComponents: (
      <React.Fragment>
        <section className="centered pulse-centered">
          <div
            class="pulse-dot"
            style={{ width: "4rem", height: "4rem", background: "aliceblue" }}
          ></div>
        </section>
      </React.Fragment>
    ),
    markup: `<div
  class="pulse-dot"
  style="width: 4rem; height: 4rem; background: aliceblue"
></div>
`,
  },
  {
    id: "loader",
    title: "Loader",
    description:
      "You can also use circular loader, the default size is small, and the colour is the primary colour. Both of which are customizable.",
    displayComponents: (
      <React.Fragment>
        <div class="loader"></div>
        <div class="loader loader--secondary"></div>
        <div class="loader loader--tertiary"></div>
      </React.Fragment>
    ),
    markup: `<div class="loader"></div>
<div class="loader loader--secondary"></div>
<div class="loader loader--tertiary"></div>`,
  },
  {
    id: "__loaderMedium",
    description: "Medium sized loaders",
    displayComponents: (
      <React.Fragment>
        <div class="loader loader--medium"></div>
        <div class="loader loader--secondary loader--medium "></div>
        <div class="loader loader--tertiary loader--medium "></div>
      </React.Fragment>
    ),
    markup: `<div class="loader loader--medium"></div>
<div class="loader loader--secondary loader--medium"></div>
<div class="loader loader--tertiary loader--medium"></div>`,
  },
  {
    id: "__loaderLarge",
    description: "Large sized loaders",
    displayComponents: (
      <React.Fragment>
        <div class="loader loader--large"></div>
        <div class="loader loader--secondary loader--large "></div>
        <div class="loader loader--tertiary loader--large "></div>
      </React.Fragment>
    ),
    markup: `<div class="loader loader--large"></div>
<div class="loader loader--secondary loader--large"></div>
<div class="loader loader--tertiary loader--large"></div>`,
  },
  {
    id: "__loaderCustom",
    description: "Customizing size and color",
    displayComponents: (
      <React.Fragment>
        <div
          class="loader"
          style={{
            width: "2rem",
            height: "2rem",
            borderTopColor: "lightblue",
            borderLeftColor: "lightblue",
            borderRightColor: "lightblue",
          }}
        ></div>
      </React.Fragment>
    ),
    markup: `<div
  class="loader"
  style="
    width: 2rem;
    height: 2rem;
    border-top-color: lightblue;
    border-left-color: lightblue;
    border-right-color: lightblue;
  "
  }}
></div>`,
  },
]

export default function ProgressBar() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
