import React, { useState } from "react"
import ComponentDocPage from "../../../components/componentDocPage"

const PAGE_INFO = {
  title: "Toast",
  description:
    "Toasts are useful to show important notifications to the user, you can also have actions on toasts. Fun fact: The component class are named after popular YouTuber and streamer Disguised toast. I love his gameplay videos mostly Among us videos. You should check him out.",
}

export default function Toast() {
  let [toastState, setToastState] = useState(false)
  let [disguisedToast, setDisguisedToastState] = useState(false)
  const onShowToast = setState => {
    console.log(setState)
    setState(true)
    let interValID = setInterval(() => {
      console.log("Interval")
      setState(false)
      clearInterval(interValID)
    }, 4000)
  }
  const close = () => setDisguisedToastState(false)
  const SECTIONS = [
    {
      id: "toast",
      title: "Simple toast",
      description:
        "Display a simple notification to the user. Note: Currently the framework does not have any JS library, so to use this component you will need to manually add the markup to your page, remove it after sometime.",
      displayComponents: (
        <React.Fragment>
          <button
            className="btn btn--solid-primary"
            onClick={() => onShowToast(setToastState)}
          >
            Toast!
          </button>
        </React.Fragment>
      ),
      markup: `<div class="disguised-toast">
  <span> Hello there, I am an alert!</span>
</div>`,
    },
    {
      id: "DisguisedToast",
      title: "Toast with actions",
      description:
        "Display a simple notification to the user. Note: Currently the framework does not have any JS library, so to use this component you will need to manually add the markup to your page, remove it after sometime.",
      displayComponents: (
        <React.Fragment>
          <button
            className="btn btn--solid-tertiary"
            onClick={() => onShowToast(setDisguisedToastState)}
          >
            Toast!
          </button>
        </React.Fragment>
      ),
      markup: `<div class="disguised-toast">
  <span> Hello there, I am an advanced alert!</span>
  <div class="disguised-toast__actions">
    <button class="btn btn--primary">Accept</button>
    <button class="btn">Cancel</button>
  </div>
</div>`,
    },
  ]

  return (
    <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS}>
      {toastState ? (
        <div class="disguised-toast">
          <span> Hello there, I am an alert!</span>
        </div>
      ) : null}
      {disguisedToast ? (
        <div class="disguised-toast">
          <span> Hello there, I am an advanced alert!</span>
          <div class="disguised-toast__actions">
            <button class="btn btn--primary" onClick={close}>
              Accept
            </button>
            <button class="btn" onClick={close}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </ComponentDocPage>
  )
}
