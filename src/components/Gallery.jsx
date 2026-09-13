import { wedding } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Gallery() {
  return (
    <section className="gallery">
      <h2 className="section-title">Our Moments</h2>
      <div className="gallery-grid">
        {wedding.photos.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 120}>
            <img src={src} alt={`Photo ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}