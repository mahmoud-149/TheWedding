import { wedding } from '../content.js'

export default function RsvpButton({ className = '' }) {
  return (
    <a className={`rsvp-button ${className}`.trim()} href={wedding.rsvpUrl}>
      Location
    </a>
  )
}