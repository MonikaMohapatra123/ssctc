import React from "react";
import "./CompanyHighlights.css";
import { FaArrowRight } from "react-icons/fa";

const CompanyHighlights = ({ highlightData }) => {
  const { image, subheading, heading, buttonText } = highlightData;

  return (
    <div className="business-highlight">
      <div className="highlight-image">
        <img src={image} alt="Modern Building" />
      </div>
      <div className="highlight-text">
        <h2 className="highlight-main-heading">{subheading}</h2>
        <p className="highlight-subtext">{heading}</p>
        <button className="highlight-button">
          {buttonText} <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default CompanyHighlights;
