import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProblemStatements({ statements = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  // A statement opens on click and stays open until its close button is clicked.
  // Other items are ignored while one is open.
  const openStatement = (index) => {
    if (openIndex === null) setOpenIndex(index)
  }

  const closeStatement = () => setOpenIndex(null)

  if (!statements.length) {
    return <p className="problem-empty">Problem statement to be released soon.</p>
  }

  const open = openIndex !== null ? statements[openIndex] : null

  return (
    <div className="problem-statements">
      <p className="problem-instruction">Select any one of the problem statements below.</p>

      <ul className="problem-list">
        {statements.map((statement, index) => (
          <li key={statement.id}>
            <button
              type="button"
              className={`problem-item${openIndex === index ? ' is-open' : ''}`}
              aria-expanded={openIndex === index}
              onClick={(event) => {
                event.stopPropagation()
                openStatement(index)
              }}
              onKeyDown={(event) => event.stopPropagation()}
            >
              <span>{String(index + 1).padStart(2, '0')}. {statement.title}</span>
              <span className="problem-arrow" aria-hidden="true">→</span>
            </button>
          </li>
        ))}
      </ul>

      {open && createPortal(
        <div
          className="problem-popup"
          role="dialog"
          aria-modal="false"
          aria-label={open.title}
        >
          <div className="problem-popup-head">
            <span>{open.codename ? open.codename.toUpperCase() : 'PROBLEM STATEMENT'}</span>
            <button type="button" aria-label="Close problem statement" onClick={closeStatement}>×</button>
          </div>
          <h4>{open.title}</h4>
          {open.detail.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="problem-popup-foot">
            <button type="button" className="problem-close" onClick={closeStatement}>CLOSE</button>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}