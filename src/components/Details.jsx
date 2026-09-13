import { wedding } from '../content.js'

export default function Details() {
  return (
    <section className="details">
      <h3 className="subsection-title">Schedule</h3>
      <div className="schedule">
        {wedding.schedule.map((item) => (
          <div className="schedule-item" key={item.time}>
            <span className="schedule-time">{item.time}</span>
            <div>
              <p className="schedule-title">{item.title}</p>
              <p className="schedule-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">When &amp; Where</h2>
      <div className="details-card">
        <p className="details-date">{wedding.dateLabel}</p>
        <p className="details-venue">{wedding.location.venue}</p>
        <p className="details-city">{wedding.location.city}</p>
      </div>
    </section>
  );
}