export const event = {
  year: '2026',
  roundTwo: { label: 'Overnight hackathon', date: '17—18 Oct 2026', time: '7:00 PM—3:00 PM', place: 'MPSTME' },
  judging: '3:00 PM—6:00 PM',
  teamSize: '03',
  fee: '₹600',
  prizePool: '₹20,000',
  registrationUrl: 'https://unstop.com/o/OXEWrDB',
}

// Pre-hackathon workshop. Everyone who registers attends and then moves on to the overnight hackathon.
export const workshop = {
  title: 'Hackathon workshop',
  organisers: 'FOSS MPSTME × CSI MPSTME',
  date: '16 Oct 2026',
  time: '5:00 PM—8:00 PM',
  place: 'MPSTME',
}

// Filled in once results are out. Each entry: { team: 'Team Name', repo: 'https://github.com/...' }
// Until this has entries, the prize box shows the "to be announced" placeholder.
export const winners = []

export const tracks = [
  {
    number: '01',
    title: 'Intermediate\nTrack',
    description: ['Build a dependable system.', 'Test it in the real world.', 'Show the engineering.'],
    tags: ['BUILD', 'TEST', 'RELIABILITY', 'SYSTEMS'],
    tone: 'dark',
    problemStatements: [
      {
        id: 'rented-account',
        title: 'The Rented Account Problem',
        codename: 'The Trust Juggler',
        detail: [
          'A delivery platform verifies every rider once — background check, ID, the works — and from that single approval, trusts the same identity through every login for as long as the account exists, across tens of thousands of riders and millions of sessions. Managing that trust involves a delicate trade-off:',
          '● The Strict Gate: Re-verifying identity on every login guarantees that whoever\'s behind the wheel is who they claim to be — but it flags every routine change, a new phone, a moved city, a new delivery zone, and locks out real workers over nothing.',
          '● The Open Gate: Trusting the original one-time verification indefinitely keeps things frictionless for legitimate workers — but once past that first check, a rented or handed-off account can keep running under someone else\'s approved identity for as long as nobody looks again.',
          'If the platform leans too hard toward the Strict Gate, honest workers get locked out over ordinary life changes and abandon the platform in frustration. If it leans too hard toward the Open Gate, an account quietly changes hands — same city, same old phone, just a different person behind the wheel — and runs undetected for weeks under someone else\'s trust.',
          'The Trust Juggler tasks participants with building an automated, real-time identity engine. The system must continuously score every login and session against that rider\'s known behavioral pattern, hold enough certainty to guarantee legitimate workers are never needlessly blocked, and automatically escalate only the sessions that genuinely look like someone else has taken over the account.',
        ],
      },
      {
        id: 'receipt-graveyard',
        title: 'The Receipt Graveyard',
        codename: '',
        detail: [
          'Every business trip, client lunch, or office supply run ends the same way: a receipt gets shoved in a pocket, forgotten in an inbox, or photographed at 11 PM the night before it\'s "due." On the other side, someone in finance is opening each one, squinting at a faded thermal printout, checking it against a policy document, and hoping the math adds up before reimbursement goes out. Neither side wants to be doing this. The employee isn\'t trying to build an expense report. They\'re trying to get reimbursed for something they already paid for. The finance team isn\'t trying to read receipts. They\'re trying to make sure money goes out correctly and nothing slips through that shouldn\'t. Somewhere in between, a lot of time gets lost to the mechanics: capturing the receipt, categorizing it, matching it to a policy, catching the one that\'s slightly over the limit or missing a client name, and turning all of that into a decision.',
          'The Reality You\'re Dealing With: You\'ll be given a company expense policy and a month of submitted receipts from several employees. This is not a clean dataset.',
          '● The policy has layered rules: category caps, city-specific daily limits, non-reimbursable items, approval thresholds, and requirements like client names or attendee counts. Rules interact. A meal on a trip is treated differently from a meal at the office.',
          '● The receipts are messy: faded, rotated, cropped, handwritten, in different currencies, partially itemized, missing totals or dates, or with math that doesn\'t add up.',
          '● Some are duplicates. Some are submitted twice through different channels. Some are plainly out of policy. A few look suspicious.',
          '● They arrive over the course of the month, so limits accumulate and patterns emerge.',
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'Advanced\nTrack',
    description: ['Take on deeper constraints.', 'Design for scale and failure.', 'Make every decision count.'],
    tags: ['ARCHITECTURE', 'SCALE', 'RESILIENCE', 'LOGIC'],
    tone: 'light',
    problemStatements: [
      {
        id: 'idle-cash',
        title: 'The Idle Cash Problem',
        codename: 'The Reserve Juggler',
        detail: [
          'A digital bank or modern investment app moves $20,000,000 in customer deposits, withdrawals, and merchant settlements every single hour. Managing this money involves a delicate trade-off:',
          '● The Cash Buffer: Money kept sitting in ready-to-use checking accounts earns 0% interest, but it guarantees that whenever a user withdraws money or buys something, the cash is immediately there.',
          '● The Yield Vault: Money parked in short-term overnight yield accounts earns 5% annual return, but once locked in, it cannot be instantly pulled back mid-day without paying hefty early-withdrawal penalty fees.',
          'If the platform holds too much cash in the buffer, it bleeds thousands of dollars in lost interest every day. If it holds too little, a sudden wave of customer withdrawals (like payday or a shopping holiday) causes an overdraft, triggering emergency bank loans that cost punitive penalty rates.',
          'The Reserve Juggler tasks participants with building an automated, real-time treasury engine. The system must continuously forecast incoming deposits and outgoing withdrawals, maintain the exact safety cushion required to guarantee 100% of customer payouts without delay, and automatically sweep every remaining dollar into yield-earning accounts to maximize returns.',
        ],
      },
      {
        id: 'ghost-attacks',
        title: 'Ghost Attacks',
        codename: '',
        detail: [
          'At 2:14 AM on a Tuesday, an automated alert wakes the core engineering team at a major decentralized finance protocol. A malicious actor has just exploited a minor vulnerability in their smart contract, draining $42 million in digital assets. By 2:17 AM, the stolen funds hit the attacker\'s primary Ethereum wallet.',
          'The clock is ticking. Within minutes, the attacker triggers an automated script, splitting the $42 million into hundreds of tiny, unequal micro-transactions and routing them through cross-chain bridges and privacy mixers. On the blockchain, the money fractures into a chaotic cloud of anonymous, disconnected wallets. The digital paper trail is broken.',
          'The Conflict',
          'In a traditional war room, two teams try to track the thief, but they speak entirely different languages:',
          '● The OSINT Investigators: They are digital detectives. They scour dark web forums, Telegram channels, and GitHub code commits, looking for a leaked IP address, an accidental username mention, or a sloppy code snippet that reveals the hacker\'s real-world identity. They find a few leads, but they are drowning in text files and have no way to connect a forum post to a live, moving blockchain transaction.',
          '● The Blockchain Analysts: They are staring at the raw transaction graphs. They can see the anonymous wallet strings (0x7a1b...), but they are blind to who owns them. Worse, the hacker is using automated bots that change the timing and sizes of the transfers to mimic normal market noise. The investigators are forced to manually export data into massive spreadsheets, trying to match a time-stamp from a leaked chat log with a transaction on the ledger.',
          'It is a losing battle. The sheer velocity and volume of the financial data are overwhelming. For every connection they manually uncover, the hacker\'s bot spins up ten new wallets. By hour six, the manual data correlation slows to a crawl. The hacker is preparing to cash out the stolen millions into fiat currency through an unregulated offshore exchange. Once that money hits the traditional banking system under fake identities, it is gone forever.',
          'The teams realize they don\'t just need data, they need a bridge. They need a system that can take the messy, unstructured text of the open-source internet (OSINT) and mathematically fuse it with the high-speed, multi-dimensional time-series data of the blockchain ledger.',
          'You must design a Quantitative OSINT Blockchain Engine that eliminates the manual guesswork. Your software needs to:',
          '● Automatically scrape public threat feeds and developer repositories for identity markers.',
          '● Treat the live blockchain ledger as a mathematical matrix.',
          '● Use statistical modeling (like time-delta latency analysis and graph clustering) to predictively link anonymous wallets to real-world identities.',
        ],
      },
    ],
  },
]

export const faqs = [
  [
    'What is Hackforge?',
    'Hackforge 2026 is the first overnight hackathon organised by FOSS Club MPSTME × CSI MPSTME. Teams spend one night building a working, dependable solution to a complex problem. The focus is on engineering quality, so a polished pitch or a prototype alone will not be enough.',
  ],
  [
    'How many people can be on a team?',
    'Each team has three members. Registration is done per team, and the fee is ₹600 for the whole team.',
  ],
  [
    'How does the event work?',
    'Hackforge starts with a Hackathon workshop, run jointly by FOSS MPSTME and CSI MPSTME, on 16 October 2026 from 5:00 PM to 8:00 PM at MPSTME. Every registered team then moves on to the overnight hackathon at MPSTME, from 7:00 PM on 17 October 2026 to 3:00 PM on 18 October 2026. Judging runs from 3:00 PM to 6:00 PM, followed by prize distribution.',
  ],
  [
    'What should teams build?',
    'Teams choose one of two tracks. The Intermediate track asks for a dependable system that is tested in real-world conditions. The Advanced track asks for solutions that handle deeper constraints, scale and failure. In both tracks, judges look at whether the solution works, how the architecture is designed, how it is tested, and how clearly the engineering decisions are explained.',
  ],
  [
    'Where can I register?',
    'Registration is open on Unstop. Use any Register button on this page to open the official event listing. The registration fee is ₹600 per team of three.',
  ],
]

// Footer branding. `graphic` is the big FOSS CLUB lettering.
export const footer = {
  logo: '/assets/foss-logo.jpeg',
  name: 'FOSS Club MPSTME',
  graphic: '/assets/foss-club-graphic.png',
  tag: 'FORK_BUDDIES',
}

// Explore links in the footer.
export const footerExplore = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
]

// Contact details in the footer.
export const contact = {
  organisation: 'MPSTME, NMIMS, Mumbai',
  address: 'Bhakti Vedant Marg, opp. Cooper Hospital, Navpada, Suvarna Nagar, Vile Parle West, Mumbai, Maharashtra 400056',
  email: 'fossmpstme@gmail.com',
  phone: '+91 79000 93744',
}

// Social links. Supported icons: instagram, linkedin, github.
export const socials = [
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/foss_club_mpstme/' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/foss-mpstme/posts/?feedView=all' },
  { label: 'GitHub', icon: 'github', url: 'https://github.com/FOSS-Club-MPSTME' },
]

// Link shown under the social icons.
export const footerLink = { label: 'FOSS United MPSTME', url: 'https://fossunited.org/c/mpstme-nmims' }