import Reveal from './Reveal'
import { event } from '../data/event'

export default function RegisterCTA() {
  return (
    <Reveal as="section" className="register-cta" id="register">
      <div className="register-eyebrow"><span>FOSS CLUB MPSTME</span><span>APPLICATION / 2026</span></div>
      <h2 className="display-xl"><span>READY</span><span>TO <em>FORGE?</em></span></h2>
      <div className="register-action">
        <a href={event.registrationUrl} target="_blank" rel="noreferrer">REGISTER ON UNSTOP <span aria-hidden="true">↗</span></a>
        <p>OFFICIAL EVENT<br />UNSTOP LISTING</p>
      </div>
    </Reveal>
  )
}