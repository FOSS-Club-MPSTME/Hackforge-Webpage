import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <Tag ref={ref} className={`${className} reveal${visible ? ' is-visible' : ''}`} {...props}>{children}</Tag>
}