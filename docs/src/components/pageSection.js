import React, { useEffect } from "react"
import { Link } from "gatsby"

export default function PageSection({ links }) {
  const isPartiallyActive = (props, id) => {
    console.log(props.href, id)
    return props.location.href.includes(id)
      ? { className: "link link--tertiary link--active" }
      : { className: "link link--tertiary" }
  }
  const getURL = id => {
    let location = window.location
    let origin = location.origin
    let path = location.pathname.endsWith("/")
      ? location.pathname
      : `${location.pathname}/`
    return `${origin}${path}#${id}`
  }
  useEffect(() => {
    // TODO: Fix for links being higlighted when smooth scrolled
    const sections = Array.from(
      document.querySelectorAll(".doc-content .doc-section")
    ).filter(section => section.id && !section.id.startsWith("__"))
    if (links.length > 1)
      window.onscroll = function () {
        console.log("Scrolled")
        let currentlyInView
        for (let i = 0; i < sections.length; i++) {
          let section = sections[i]
          // console.log("section", section)
          let boundingY = section.getBoundingClientRect().y
          // If bounding Y is negative that means the section is currently not in view.
          if (boundingY > 0 && boundingY <= window.innerHeight) {
            currentlyInView = section
            break
          }
        }
        if (currentlyInView) {
          let currentActiveLink = document.querySelector(
            ".page-navigation .link--active"
          )
          if (currentActiveLink)
            currentActiveLink.classList.remove("link--active")
          let link = document.querySelector(`[data-id='${currentlyInView.id}']`)
          link.classList.add("link--active")
          window.history.pushState(null, null, getURL(currentlyInView.id))
        }
      }
  }, [])
  let linksHTML = links
    .filter(link => link.id && !link.id.startsWith("__"))
    .map((link, index) => (
      <li className="list__item" key={index}>
        <Link
          to={`#${link.id}`}
          className="1 link link--tertiary"
          activeClassName="link--active"
          data-id={link.id}
          getProps={props => isPartiallyActive(props, link.id)}
        >
          {link.title}
        </Link>
      </li>
    ))
  return (
    <section className="content__aside">
      {links.length > 1 ? (
        <ul className="list list--links page-navigation">{linksHTML}</ul>
      ) : null}
    </section>
  )
}
