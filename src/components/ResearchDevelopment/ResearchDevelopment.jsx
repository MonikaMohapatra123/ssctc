import React from "react";
import "./ResearchDevelopment.css";
import { FaFlask } from "react-icons/fa";

const ResearchDevelopment = ({ researchDevelopment }) => {
  if (!researchDevelopment) return null;

  return (
    <div className="research-section">
      <div className="research-header">
        <FaFlask className="research-icon" />
        <h2>{researchDevelopment.sectionTitle}</h2>
      </div>
      <ul className="research-list">
        {researchDevelopment.items.map((item, index) => (
          <li key={index} className="research-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchDevelopment;
