import { wedding } from '../content.js'
import RsvpButton from './RsvpButton.jsx'

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${wedding.location.venue}, ${wedding.location.city}`)

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-photo">
        <img src={wedding.couplePhoto} alt="The engaged couple" />
      </div>

      <p className="hero-eyebrow">The wedding of</p>
      <h1 className="hero-names">
        {wedding.groom} &amp; {wedding.bride}
      </h1>

      <div className="hero-divider">
        <span className="divider-line" />
        <span className="divider-icon">✦</span>
        <span className="divider-line" />
      </div>

      <div className="hero-date-block">
        <p className="hero-date">{wedding.dateLabel}</p>
      </div>

      <p className="hero-venue">
        <a href={mapsUrl} target="_blank" rel="noreferrer">
          {wedding.location.venue}, {wedding.location.city}
        </a>
      </p>

      <RsvpButton />
    </header>
  )
}