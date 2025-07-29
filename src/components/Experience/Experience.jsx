import React from "react";
import "./Experience.css";


const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience-header">
        <div className="icon">📊</div>
        <h2>Experience</h2>
      </div>
      <div className="experience-content">
        <div className="experience-image">
          <img src="sspic.png" alt="Mr. Suresh Sarma" />
          <p className="consultant-name">Mr. Suresh Sarma (Primary Consultant)</p>
        </div>
        <div className="experience-details">
          <ul>
            <li>
              Experience 25+ years in Thermal Design, commissioning & performance
              testing of IDCT & NDCT.
            </li>
            <li>
              Thermal Design, Supervision, commissioning and testing of more than 50
              Cooling Tower Projects.
            </li>
            <li>
              Cooling Tower Guaranteed performance upgrades with guaranteed
              cold-water improvement.
            </li>
            <li>
              Major role in R&D of cooling towers and components.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
