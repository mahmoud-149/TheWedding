import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Details from './components/Details.jsx'
import Gallery from './components/Gallery.jsx'
import RsvpButton from './components/RsvpButton.jsx'
import Reveal from './components/Reveal.jsx'
import { wedding } from './content.js'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Reveal>
        <Countdown date={wedding.date} />
      </Reveal>
      <Reveal>
        <Details />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <div className="rsvp-bottom">
          <RsvpButton />
          <p className="rsvp-hint">Kindly reply before September 20, 2026</p>
        </div>
      </Reveal>
      <Reveal>
        <footer className="footer">
          <p>
            {wedding.groom} &amp; {wedding.bride} — {wedding.dateLabel}
          </p>
          <p className="footer-note">We can&apos;t wait to celebrate with you.</p>
        </footer>
      </Reveal>
    </div>
  )
}