import { useEffect, useState } from 'react'

const links = ['about', 'tracks', 'timeline', 'prizes', 'faq']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const heroHeight = document.getElementById('top')?.offsetHeight ?? 0
      const pastHero = y > heroHeight
      const scrollingDown = y > lastY
      lastY = y

      const shouldHide = pastHero && scrollingDown
      setHidden(shouldHide)
      if (shouldHide) setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${hidden ? ' is-hidden' : ''}`}>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
        <span>{open ? 'CLOSE' : 'MENU'}</span><b aria-hidden="true">{open ? '×' : '+'}</b>
      </button>
      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
      </nav>
    </header>
  )
}