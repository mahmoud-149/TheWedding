import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'

function getRemaining(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function Countdown({ date }) {
  const [time, setTime] = useState(() => getRemaining(date))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(date)), 1000)
    return () => clearInterval(id)
  }, [date])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section className="countdown">
      <h2 className="section-title">Counting down to the big day</h2>
      <div className="countdown-grid">
        {units.map(({ label, value }, i) => (
          <Reveal key={label} delay={i * 120}>
            <div className="countdown-card">
              <span className="countdown-value">
                {String(value).padStart(2, '0')}
              </span>
              <span className="countdown-label">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}