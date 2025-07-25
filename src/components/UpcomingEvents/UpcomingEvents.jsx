
import React from "react";
import "./UpcomingEvents.css";

const UpcomingEvents = ({ events = [] }) => {
  if (!Array.isArray(events)) return null; // safety check

  return (
    <div className="upcoming-events-container">
      <h2 className="events-title">Upcoming events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-header">
              <span className="event-type">{event.type}</span>
              <span className="event-date">{event.date}</span>
            </div>
            <div className="event-image-container">
              <div className="top-line"></div>
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
            <p className="event-title">{event.title}</p>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-btn">
          View all events <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
