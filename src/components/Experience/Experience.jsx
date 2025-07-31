import React from "react";
import "./Experience.css";

const Experience = ({ experienceData }) => {
  if (!experienceData) return null;

  const { title, consultant } = experienceData;

  return (
    <section className="experience-section">
      <div className="experience-header">
        <span className="experience-icon">📊</span>
        <h2>{title}</h2>
      </div>

      <div className="experience-card">
        <div className="consultant-info">
          <img src={consultant.image} alt={consultant.name} />
          <p className="consultant-name">{consultant.name}</p>
          <p className="consultant-role">({consultant.role})</p>
        </div>

        <div className="experience-details">
          <ul>
            {consultant.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
