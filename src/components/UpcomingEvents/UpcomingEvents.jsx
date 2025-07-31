import React from "react";
import "./UpcomingEvents.css";

const UpcomingEvents = ({ events = [] }) => {
  if (!Array.isArray(events)) return null;

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  return (
    <div className="upcoming-events-container">
      <h2 className="events-title">CT Performance Testing Experience</h2>

      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <div className="event-content">
              <p className="event-date">{formatDate(event.date)}</p>
              <p className="event-title">{event.title}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
