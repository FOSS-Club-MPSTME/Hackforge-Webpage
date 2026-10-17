# Hackforge 2026

The official website for **Hackforge 2026**, the first overnight hackathon organised by **FOSS Club MPSTME** at SVKM's NMIMS MPSTME, Mumbai.

> THINK. BUILD. FORGE.

---

## Table of Contents

- [About the Event](#about-the-event)
- [Event Details](#event-details)
- [Tracks](#tracks)
- [Tech Stack](#tech-stack)
- [Features of the Website](#features-of-the-website)
- [Folder Structure](#folder-structure)
- [Getting Started (Run Locally)](#getting-started-run-locally)
- [Editing the Content](#editing-the-content)
- [Adding Assets](#adding-assets)
- [Building for Production](#building-for-production)
- [Contact](#contact)

---

## About the Event

Hackforge 2026 is a 24-hour style build focused on dependable, working solutions to complex problems. Teams spend one night engineering a solution that works, rather than a polished pitch or a prototype alone. The judging looks at whether the solution works, how the architecture is designed, how it is tested, and how clearly the engineering decisions are explained.

---

## Event Details

| Item | Details |
| --- | --- |
| Event | Hackforge 2026 |
| Organiser | FOSS Club MPSTME |
| Format | Single overnight hackathon, in person |
| Venue | MPSTME, NMIMS, Mumbai |
| Hackathon | 17 - 18 October 2026, 7:00 PM - 3:00 PM |
| Judging | 3:00 PM - 6:00 PM |
| Prize pool | ₹20,000 |
| Team size | 3 members |
| Registration fee | ₹600 per team |
| Registration | [Register on Unstop](https://unstop.com/o/OXEWrDB) |

---

## Tracks

Each team picks one of two tracks.

- **Intermediate Track:** Build a dependable system and test it in the real world. Keywords: build, test, reliability, systems.
- **Advanced Track:** Take on deeper constraints and design for scale and failure. Keywords: architecture, scale, resilience, logic.

Problem statements for each track are added in `src/data/event.js` and shown in the Tracks section of the site.

---

## Tech Stack

| Area | Technology |
| --- | --- |
| UI library | [React](https://react.dev/) |
| Build tool and dev server | [Vite](https://vitejs.dev/) with `@vitejs/plugin-react` |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Font Awesome 6 set) |
| Display font | [Tektur](https://fontsource.org/fonts/tektur) via `@fontsource-variable/tektur` |
| Monospace font | Terminess Nerd Font Mono (bundled in `public/fonts`) |
| Styling | Plain CSS (`globals.css`, `variables.css`, `animations.css`) |
| Linting | oxlint (`.oxlintrc.json`) |

No backend or database is used. All content lives in `src/data/event.js`.

---

## Features of the Website

- Animated hero section with the event poster
- Event pass with schedule, team size, fee and prize pool
- About / manifesto section
- Two track panels with interactive graphics and problem statements
- Timeline of the event run-of-show
- Prize section with a winners list (shows a placeholder until winners are added)
- FAQ accordion
- Registration call-to-action linking to Unstop
- Footer with partner branding, explore links, contact details and social links
- Responsive layout for desktop and mobile
- Navbar that hides while scrolling down past the hero and returns when scrolling up
- Respects the user's reduced-motion setting

---

## Folder Structure

```
Hackforge - The Overnight Hackathon/
├── public/
│   ├── assets/
│   │   ├── foss-logo.jpeg              # FOSS Club logo (navbar and footer)
│   │   ├── foss-club-graphic.png       # FOSS Club lettering (footer)
│   │   └── hackforge-poster.jpeg       # Official event poster (hero)
│   ├── fonts/
│   │   └── TerminessNerdFontMono-Regular.ttf
│   ├── favicon.svg
│   └── .DS_Store
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx            # About / manifesto section
│   │   ├── BrandMark.jsx               # Logo mark (not currently used)
│   │   ├── EditorialLabel.jsx          # Numbered section labels
│   │   ├── EventPass.jsx               # Event pass, schedule and stats
│   │   ├── FAQ.jsx                     # FAQ accordion
│   │   ├── Footer.jsx                  # Site footer
│   │   ├── Hero.jsx                    # Hero section
│   │   ├── PosterFrame.jsx             # Poster frame used in the hero
│   │   ├── PrizeSection.jsx            # Prize pool and winners
│   │   ├── RegisterCTA.jsx             # Final registration call-to-action
│   │   ├── Reveal.jsx                  # Scroll-reveal wrapper
│   │   ├── Timeline.jsx                # Run-of-show timeline
│   │   ├── TracksSection.jsx           # Track panels and problem statements
│   │   ├── graphics/
│   │   │   ├── AutomationWireframe.jsx # Intermediate track graphic
│   │   │   └── OptimizationSurface.jsx # Advanced track graphic
│   │   └── Navbar.jsx                  # Top navigation (hides on scroll)
│   ├── data/
│   │   └── event.js                    # All event content and settings
│   ├── styles/
│   │   ├── animations.css              # Keyframes and reveal animations
│   │   ├── globals.css                 # Main stylesheet for the site
│   │   └── variables.css               # Colours, fonts, spacing tokens
│   ├── App.jsx                         # Page layout and section order
│   ├── App.css                         # Unused template styles
│   ├── index.css                       # Unused template styles
│   └── main.jsx                        # App entry point
├── .gitignore
├── .oxlintrc.json                      # Linter configuration
├── index.html                          # HTML shell and page title
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Getting Started (Run Locally)

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS. Vite requires Node 20.19+ or 22.12+)
- npm (installed with Node.js)

Check your versions:

```bash
node -v
npm -v
```

### 1. Clone or extract the project

```bash
git clone <your-repository-url>
cd "Hackforge - The Overnight Hackathon"
```

If you downloaded a zip file, extract it and open the folder in your terminal.

### 2. Install dependencies

```bash
npm install
```

Install the icon package used in the footer (only needed once, or if it is missing):

```bash
npm install react-icons
```

### 3. Start the development server

```bash
npm run dev
```

Vite prints a local address, usually:

```
http://localhost:3000
```

Open it in your browser. The page reloads automatically when you save a file.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimised production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |

### Troubleshooting

- **Blank page:** Open the browser console (`Cmd+Option+J` on Mac, `F12` on Windows). A syntax error in `src/data/event.js` or a missing export is the most common cause. Fix the error, then restart the dev server.
- **Changes not showing:** Restart `npm run dev` and hard-refresh the browser (`Cmd+Shift+R` or `Ctrl+Shift+R`).
- **Icons missing in the footer:** Run `npm install react-icons`, then restart the dev server.

---

## Editing the Content

Almost all text, dates, prices and links are in `src/data/event.js`. Edit that file to update the site without touching the components.

| What to change | Where in `event.js` |
| --- | --- |
| Dates, times, venue, judging time | `event` (`roundTwo`, `judging`) |
| Team size, fee, prize pool | `event` (`teamSize`, `fee`, `prizePool`) |
| Registration link | `event` (`registrationUrl`) |
| Track names, descriptions, tags | `tracks` |
| Problem statements | `tracks` (`brief` field of each track) |
| FAQ questions and answers | `faqs` |
| Winners list | `winners` (`{ team: 'Team Name', repo: 'https://github.com/...' }`) |
| Footer logo, graphic and tag | `footer` |
| Footer explore links | `footerExplore` |
| Contact details | `contact` |
| Social links | `socials` (paste each URL into `url`) |
| Footer link under social icons | `footerLink` |

Section order on the page is set in `src/App.jsx`.

---

## Adding Assets

Place image files in `public/assets/` and reference them with a leading slash:

```js
// public/assets/fork-buddies.jpeg  ->  src: '/assets/fork-buddies.jpeg'
```

Current assets:

- `foss-logo.jpeg`: navbar and footer logo
- `foss-club-graphic.png`: large FOSS Club lettering in the footer (set `footer.graphic` in `event.js`)
- `hackforge-poster.jpeg`: hero poster

---

## Building for Production

```bash
npm run build
npm run preview
```

The build output goes to the `dist/` folder. Upload the contents of `dist/` to any static hosting service (for example Netlify, Vercel or GitHub Pages).

---

## Contact

**FOSS Club MPSTME**

- Email: fossmpstme@gmail.com
- Phone: +91 79000 93744
- Address: Bhakti Vedant Marg, opp. Cooper Hospital, Navpada, Suvarna Nagar, Vile Parle West, Mumbai, Maharashtra 400056

---

*THINK. BUILD. FORGE.*