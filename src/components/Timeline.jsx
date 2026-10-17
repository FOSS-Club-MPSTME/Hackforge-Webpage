import EditorialLabel from './EditorialLabel'
import { event, workshop } from '../data/event'
import Reveal from './Reveal'

const joinLines = (...parts) => parts.filter(Boolean).join('\n')

const items = [
  ['01', workshop.title, joinLines(workshop.date, workshop.time)],
  ['02', 'Overnight hackathon', joinLines(event.roundTwo.date, event.roundTwo.time)],
  ['03', 'Judging', event.judging],
  ['04', 'Prize distribution', event.prizePool],
]

export default function Timeline() {
  return (
    <Reveal as="section" className="timeline content-section" id="timeline">
      <EditorialLabel number="003">Timeline / Run of show</EditorialLabel>
      <h2 className="section-title"><span>Learn first.</span><span>Then build.</span></h2>
      <ol className="timeline-track" aria-label="Event flow">
        {items.map(([number, title, detail]) => (
          <li key={number} className="timeline-step">
            <span className="timeline-node" aria-hidden="true">{number}</span>
            <h3>{title}</h3>
            <p>{detail.split('\n').map((line) => <span key={line}>{line}</span>)}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}