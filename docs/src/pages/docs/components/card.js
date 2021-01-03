import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Card",
  description:
    "A card can have 3 sections, title, content, footer. Footer can be used to display any actions that can be performed on the content.",
}
const SECTIONS = [
  {
    id: "__card",
    displayComponents: (
      <React.Fragment>
        <div className="card">
          <div className="card__header">This is a card</div>
          <div className="card__body">
            You can add card content here. The card body will grow with the
            content size. Card header and footer are optional.
          </div>
          <div className="card__footer">
            <button className="btn btn--primary">Info</button>
            <button className="btn btn--tertiary">Like</button>
          </div>
        </div>
      </React.Fragment>
    ),
    markup: `<div class="card">
  <div class="card__header">This is a card</div>
  <div class="card__body">
    You can add card content here. The card body will grow with the content
    size. Card header and footer are optional.
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Info</button>
    <button class="btn btn--tertiary">Like</button>
  </div>
</div>
`,
  },
]
export default function Card() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
