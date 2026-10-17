const blocks = [
  { x: 56, y: 120, w: 82, h: 62, d: 30, label: 'EDGE_A' },
  { x: 178, y: 82, w: 96, h: 100, d: 36, label: 'CORE_01' },
  { x: 324, y: 114, w: 72, h: 68, d: 27, label: 'NODE_C' },
  { x: 428, y: 66, w: 54, h: 116, d: 22, label: 'IOT_04' },
]

function WireBlock({ x, y, w, h, d, label, index }) {
  const top = `${x},${y} ${x + d},${y - d * .55} ${x + w + d},${y - d * .55} ${x + w},${y}`
  const side = `${x + w},${y} ${x + w + d},${y - d * .55} ${x + w + d},${y + h - d * .55} ${x + w},${y + h}`
  return (
    <g className="wire-building" style={{ '--path-index': index }}>
      <polygon points={top} />
      <polygon points={side} />
      <rect x={x} y={y} width={w} height={h} />
      {Array.from({ length: 3 }, (_, row) => Array.from({ length: 3 }, (_, col) => (
        <rect className="wire-window" key={`${row}-${col}`} x={x + 10 + col * (w - 20) / 3} y={y + 12 + row * 15} width="9" height="7" />
      )))}
      <text x={x} y={y + h + 16}>{label}</text>
    </g>
  )
}

export default function AutomationWireframe() {
  return (
    <svg className="technical-graphic automation-wireframe" viewBox="0 0 560 260" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="automation-title automation-desc">
      <title id="automation-title">Automation infrastructure wireframe</title>
      <desc id="automation-desc">An isometric engineering blueprint showing connected buildings, devices, sensor nodes and routed signals.</desc>
      <defs>
        <pattern id="automation-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" /></pattern>
      </defs>
      <rect className="wire-grid" x="1" y="1" width="558" height="234" fill="url(#automation-grid)" />
      <path className="ground-plane" d="m18 214 190-112 330 78-187 64zM75 181l329 49M139 144l330 48M204 109l328 49M112 159l-2 59M208 104l-2 129M306 127l-2 120M403 150l-2 82" />
      {blocks.map((block, index) => <WireBlock key={block.label} {...block} index={index} />)}
      <g className="signal-routes">
        <path d="M97 117 226 63 360 110 455 48" pathLength="1" />
        <path d="M96 117v-24h130V63" pathLength="1" />
        <path d="M226 63h134v47h95V48" pathLength="1" />
      </g>
      <g className="wire-nodes">
        {[[97,117],[226,63],[360,110],[455,48]].map(([cx, cy], index) => <g key={cx} style={{ '--node-index': index }}><circle cx={cx} cy={cy} r="6" /><circle cx={cx} cy={cy} r="2" /></g>)}
      </g>
      <g className="wire-labels"><text x="18" y="252">SYSTEM TOPOLOGY / LIVE ROUTE</text><text x="411" y="252">XY_04.18</text></g>
      <circle className="signal-pulse" cx="0" cy="0" r="4" />
    </svg>
  )
}