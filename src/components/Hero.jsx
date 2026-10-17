import PosterFrame from './PosterFrame'
import { event } from '../data/event'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-kicker"><span>FOSS CLUB MPSTME × CSI MPSTME PRESENTS</span><span>THINK. BUILD. FORGE. &nbsp;→→→</span></div>
      <div className="hero-grid">
        <div className="hero-title-wrap">
          <p className="issue-code">ISSUE 01 / BUILD://2026</p>
          <h1 id="hero-title" className="display-xl"><span>HACK</span><span>FORGE</span><span className="year">2026</span></h1>
          <a className="hero-register" href={event.registrationUrl} target="_blank" rel="noreferrer">
            REGISTER NOW <span aria-hidden="true">↗</span>
          </a>
          <p className="hero-declaration">24 HOURS. &nbsp; REAL PROBLEMS. &nbsp; NO SHORTCUTS.</p>
        </div>
        <PosterFrame src="/assets/hackforge-poster.jpeg" alt="Official Hackforge event poster supplied by FOSS Club MPSTME and CSI MPSTME" />
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span><span>HF/26</span></div>
    </section>
  )
}