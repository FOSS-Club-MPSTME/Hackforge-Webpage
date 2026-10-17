import { useState } from 'react'
import EditorialLabel from './EditorialLabel'
import { faqs } from '../data/event'
import Reveal from './Reveal'

function FAQItem({ question, answer, open, onToggle, id }) {
  return (
    <article className={`faq-item${open ? ' open' : ''}`}>
      <h3><button onClick={onToggle} aria-expanded={open} aria-controls={`faq-${id}`}><span>{question}</span><b aria-hidden="true">{open ? '×' : '+'}</b></button></h3>
      <div className="faq-answer" id={`faq-${id}`}><div><p>{answer}</p></div></div>
    </article>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <Reveal as="section" className="faq content-section" id="faq">
      <EditorialLabel number="004">FAQ / Field notes</EditorialLabel>
      <div className="faq-layout"><h2 className="section-title"><span>Questions,</span><span>answered.</span></h2><div>{faqs.map(([q, a], i) => <FAQItem key={q} question={q} answer={a} id={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}</div></div>
    </Reveal>
  )
}