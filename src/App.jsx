import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventPass from './components/EventPass'
import AboutSection from './components/AboutSection'
import TracksSection from './components/TracksSection'
import Timeline from './components/Timeline'
import PrizeSection from './components/PrizeSection'
import FAQ from './components/FAQ'
import RegisterCTA from './components/RegisterCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <EventPass />
        <AboutSection />
        <TracksSection />
        <Timeline />
        <PrizeSection />
        <FAQ />
        <RegisterCTA />
      </main>
      <Footer />
    </>
  )
}