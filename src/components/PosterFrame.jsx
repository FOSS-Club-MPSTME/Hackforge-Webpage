export default function PosterFrame({ src = null, alt = 'Hackforge 2026 event poster' }) {
  return (
    <figure className={`poster-frame${src ? ' has-poster' : ''}`}>
      <div className="crop-marks" aria-hidden="true" />
      <div className="poster-media">
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="poster-placeholder" role="img" aria-label="Reserved frame for the official Hackforge 2026 poster">
            <span className="poster-cross" aria-hidden="true" />
            <div><b>POSTER</b><small>MEDIA SLOT / 04:05</small></div>
            <p>OFFICIAL ARTWORK<br />TO BE PLACED HERE</p>
          </div>
        )}
      </div>
      <figcaption><span>SAME CAMPUS.<br />HIGHER IDEAS.</span><small>POSTER FRAME / HF26</small></figcaption>
    </figure>
  )
}