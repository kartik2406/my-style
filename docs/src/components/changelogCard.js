import React from "react"

export default function ChangeLogCard({
  version,
  releaseDate,
  releaseSummary,
  changes,
}) {
  return (
    <li key={version} className="list__item">
      <div className="card">
        <div className="card__header">
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="release-version">v{version}</span>
            <span className="release-date" style={{ fontSize: "1rem" }}>
              {releaseDate}
            </span>
          </span>
        </div>
        <div className="card__body">
          <p>{releaseSummary}</p>
          {changes}
        </div>
      </div>
    </li>
  )
}
