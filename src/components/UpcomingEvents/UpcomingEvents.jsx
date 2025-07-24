// import React from "react";
// import "./UpcomingEvents.css";

// const events = [
//   {
//     type: "SEMINAR",
//     date: "JUL 24",
//     image: "road-11.jpg",
//     title: "Looking ahead: Financial strategy and foresight in life sciences",
//   },
//   {
//     type: "CONFERENCE",
//     date: "JUL 26",
//     image: "road-12.jpg",
//     title: "NACUBO 2025 Annual Meeting",
//   },
//   {
//     type: "WEBINAR",
//     date: "JUL 30",
//     image: "road-13.webp",
//     title:
//       "Powering up public plans: What every government and not-for-profit sponsor needs to know",
//   },
//   {
//     type: "WEBINAR",
//     date: "AUG 14",
//     image: "road-16.webp",
//     title:
//       "Beyond the build: Strategic success in Costpoint implementations",
//   },
// ];

// const UpcomingEvents = () => {
//   return (
//     <div className="upcoming-events-container">
//       <h2 className="events-title">Upcoming events</h2>
//       <div className="events-list">
//         {events.map((event, index) => (
//           <div className="event-card" key={index}>
//             <div className="event-header">
//               <span className="event-type">{event.type}</span>
//               <span className="event-date">{event.date}</span>
//             </div>
//             <div className="event-image-container">
//               <div className="top-line"></div>
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="event-image"
//               />
//             </div>
//             <p className="event-title">{event.title}</p>
//           </div>
//         ))}
//       </div>
//       <div className="view-all-container">
//         <button className="view-all-btn">
//           View all events <span className="arrow">→</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;


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
