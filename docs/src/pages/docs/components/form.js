import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Form",
  description: "Customize the look of form inputs.",
}
const SECTIONS = [
  {
    id: "formInputs",
    title: "Form inputs",
    description:
      "Style inputs and labels to the site theme. Label, input gets highlighted on focus.",
    displayComponents: (
      <React.Fragment>
        <form action="" className="form">
          <div className="form__input">
            <input type="text" id="name" placeholder="Your name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form__input">
            <input type="text" id="email" placeholder="Your email" />
            <label htmlFor="email">Email</label>
          </div>
        </form>
      </React.Fragment>
    ),
    markup: `<form action="" class="form">
  <div class="form__input">
    <input type="text" id="name" placeholder="Your name" />
    <label for="name">Name</label>
  </div>
  <div class="form__input">
    <input type="text" id="email" placeholder="Your email" />
    <label for="email">Email</label>
  </div>
</form>
`,
  },
  {
    id: "selectDropdown",
    title: "Select input",
    description:
      "You can also style the select input to look a bit more appealing. The appearance of the select input will match your theme. Note that the appearance of the dropdown itself cannot be controlled by CSS yet, only background and color can be changed. For select input you do not need form class as parent",
    displayComponents: (
      <React.Fragment>
        <div className="select-input">
          <select>
            <option>Lorem</option>
            <option>ipsum</option>
            <option>dolor</option>
            <option>sit</option>
          </select>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="select-input">
  <select>
    <option>Lorem</option>
    <option>ipsum</option>
    <option>dolor</option>
    <option>sit</option>
  </select>
</div>
`,
  },
]
export default function Form() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
