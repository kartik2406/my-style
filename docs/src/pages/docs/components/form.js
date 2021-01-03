import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Form",
  description: "Customize the look of form inputs.",
}
const SECTIONS = [
  {
    id: "__form",
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
]
export default function Form() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
