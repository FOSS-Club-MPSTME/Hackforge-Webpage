import { useState } from 'react'
import EditorialLabel from './EditorialLabel'
import Reveal from './Reveal'
import ProblemStatements from './ProblemStatements'
import { tracks } from '../data/event'
import AutomationWireframe from './graphics/AutomationWireframe'
import OptimizationSurface from './graphics/OptimizationSurface'

function TrackPanel({ track, index, active, activate }) {
  const title = track.title.replace('\n', ' ')
  return (
    <article
      className={`track-panel ${track.tone}${active ? ' active' : ''}`}
      id={`track-${track.number}`}
      tabIndex="0"
      aria-label={`${title}. Select this track panel.`}
      aria-current={active ? 'true' : undefined}
      onMouseEnter={activate}
      onFocus={activate}
      onClick={activate}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          activate()
        }
      }}
    >
      <div className="track-heading"><span>TRACK {track.number}</span><small>{index === 0 ? 'ENTRY / BUILD' : 'SYSTEM / SCALE'}</small></div>
      <h3 className="track-title">{track.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
      <p className="track-description">{track.description.map((line) => <span key={line}>{line}</span>)}</p>
      <div className="graphic-viewport">{index === 0 ? <AutomationWireframe /> : <OptimizationSurface />}</div>
      <ul aria-label={`${title} keywords`}>{track.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      <div className="track-explore" aria-hidden="true">EXPLORE TRACK <span>→</span></div>
      <ProblemStatements statements={track.problemStatements} />
    </article>
  )
}

export default function TracksSection() {
  const [active, setActive] = useState(null)
  const select = (index) => setActive(index)

  return (
    <Reveal as="section" className={`tracks-section${active !== null ? ` active-${active}` : ''}`} id="tracks">
      <div className="content-section tracks-intro">
        <EditorialLabel number="002">Tracks / Two paths</EditorialLabel>
        <h2 className="section-title"><span>Choose your</span><span>build path.</span></h2>
      </div>
      <div className="track-stage" onMouseLeave={() => setActive(null)}>
        <div className="track-split">
          {tracks.map((track, index) => (
            <TrackPanel track={track} index={index} active={active === index} activate={() => select(index)} key={track.number} />
          ))}
        </div>
        <div className="track-control" role="group" aria-label="Select a track panel">
          <button type="button" aria-label="Open Track 1" aria-pressed={active === 0} onClick={() => select(0)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Open Track 2" aria-pressed={active === 1} onClick={() => select(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="tracks-footer"><span>HACKFORGE 2026</span><b>THINK. BUILD. FORGE.</b><span>// FOSS CLUB</span></div>
    </Reveal>
  )
}