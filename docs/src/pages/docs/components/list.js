import React from "react"
import ComponentDocPage from "../../../components/componentDocPage"
const PAGE_INFO = {
  title: "Lists",
  description: "Used to display a group of similar objects",
}

const SECTIONS = [
  {
    id: "basicLists",
    title: "Basic lists",
    description: "Display items vertically with basic styling.",
    displayComponents: (
      <React.Fragment>
        <ul class="list">
          <li class="list__item">Book1</li>
          <li class="list__item">Book2</li>
          <li class="list__item">Book3</li>
          <li class="list__item">Book4</li>
        </ul>
      </React.Fragment>
    ),
    markup: `<ul class="list">
  <li class="list__item">Book1</li>
  <li class="list__item">Book2</li>
  <li class="list__item">Book3</li>
  <li class="list__item">Book4</li>
</ul>`,
  },
  {
    id: "listHeader",
    title: "List Header",
    description: "You can also add a header to your list using the following.",
    displayComponents: (
      <React.Fragment>
        <ul class="list">
          <li class="list__header">Favorite books</li>
          <li class="list__item">Book1</li>
          <li class="list__item">Book2</li>
          <li class="list__item">Book3</li>
          <li class="list__item">Book4</li>
        </ul>
      </React.Fragment>
    ),
    markup: `<ul class="list">
  <li class="list__header">Favorite books</li>
  <li class="list__item">Book1</li>
  <li class="list__item">Book2</li>
  <li class="list__item">Book3</li>
  <li class="list__item">Book4</li>
</ul>`,
  },
  {
    id: "solidLists",
    title: "Solid List",
    description:
      "List with a solid background, the background defaults to the themes background-variant variable.",
    displayComponents: (
      <React.Fragment>
        <ul class="list list--solid">
          <li class="list__header">Favorite books</li>
          <li class="list__item">Book1</li>
          <li class="list__item">Book2</li>
          <li class="list__item">Book3</li>
          <li class="list__item">Book4</li>
        </ul>
      </React.Fragment>
    ),
    markup: `<ul class="list list--solid">
  <li class="list__header">Favorite books</li>
  <li class="list__item">Book1</li>
  <li class="list__item">Book2</li>
  <li class="list__item">Book3</li>
  <li class="list__item">Book4</li>
</ul>`,
  },
  {
    id: "solidItems",
    title: "Solid Items",
    description:
      "Instead of giving the entire list a background, you could give background to each list item.",
    displayComponents: (
      <React.Fragment>
        <ul class="list">
          <li class="list__header">Favorite books</li>
          <li class="list__item list__item--solid">Book1</li>
          <li class="list__item list__item--solid">Book2</li>
          <li class="list__item list__item--solid">Book3</li>
          <li class="list__item list__item--solid">Book4</li>
        </ul>
      </React.Fragment>
    ),
    markup: `<ul class="list">
  <li class="list__header">Favorite books</li>
  <li class="list__item list__item--solid">Book1</li>
  <li class="list__item list__item--solid">Book2</li>
  <li class="list__item list__item--solid">Book3</li>
  <li class="list__item list__item--solid">Book4</li>
</ul>`,
  },
  {
    id: "listLinks",
    title: "List of Links",
    description:
      "When you have a list of links, you can use the following class so that all the links don't stand out much. Only links with active or hover style would stand out.",
    displayComponents: (
      <React.Fragment>
        <ul class="list list--links">
          <li class="list__header">Favorite books</li>
          <li class="list__item">
            <a class="link">Book1 </a>
          </li>
          <li class="list__item">
            <a class="link">Book2 </a>
          </li>
          <li class="list__item">
            <a class="link">Book3 </a>
          </li>
          <li class="list__item">
            <a class="link">Book4 </a>
          </li>
        </ul>
      </React.Fragment>
    ),
    markup: `<ul class="list list--links">
  <li class="list__header">Favorite books</li>
  <li class="list__item">
    <a class="link">Book1 </a>
  </li>
  <li class="list__item">
    <a class="link">Book2 </a>
  </li>
  <li class="list__item">
    <a class="link">Book3 </a>
  </li>
  <li class="list__item">
    <a class="link">Book4 </a>
  </li>
</ul>`,
  },
]
export default function List() {
  return <ComponentDocPage pageInfo={PAGE_INFO} sections={SECTIONS} />
}
