import React from "react";
import "./CompanyHighlights.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const CompanyHighlights = ({ highlightData }) => {
  const { image, subheading, heading, buttonText } = highlightData;
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleClick = () => {
    navigate("/about"); // ✅ navigate to about page
  };

  return (
    <div className="business-highlight">
      <div className="highlight-image">
        <img src={image} alt="Modern Building" />
      </div>
      <div className="highlight-text">
        <h2 className="highlight-main-heading">{subheading}</h2>
        <p className="highlight-subtext">{heading}</p>
        <button className="highlight-button" onClick={handleClick}>
          {buttonText} <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default CompanyHighlights;
