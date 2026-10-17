import { event, winners } from '../data/event'
import Reveal from './Reveal'

export default function PrizeSection() {
  const voucher = event.prizePool.replace(/\D/g, '')

  return (
    <Reveal as="section" className="prize" id="prizes">
      <div className="prize-code"><span>HF/26</span><span>VOUCHER № {voucher}</span></div>

      <div>
        <p>PRIZE POOL</p>
        <h2 className="display-lg">{event.prizePool}</h2>
        <span>TOTAL / TWO TRACKS</span>
      </div>

      <aside className="prize-winners" aria-label="Winners">
        <header><small>WINNERS</small></header>
        {winners.length > 0 ? (
          <ol>
            {winners.map((winner, index) => (
              <li key={winner.team}>
                <span className="winner-rank">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <b>{winner.team}</b>
                  <a href={winner.repo} target="_blank" rel="noreferrer">
                    GITHUB REPO <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="winners-empty">
            <i aria-hidden="true" />
            <p>Winners to be announced here</p>
          </div>
        )}
      </aside>
    </Reveal>
  )
}