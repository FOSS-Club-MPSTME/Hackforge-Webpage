export default function EditorialLabel({ number, children, inverse = false }) {
  return <div className={`editorial-label${inverse ? ' inverse' : ''}`}><span>{number}</span><p><span>{children}</span></p><i aria-hidden="true" /></div>
}