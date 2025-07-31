
import React from 'react';
import './AboutUs.css';

const AboutUs = ({ aboutData }) => {
  const { heading, description, backgroundImage } = aboutData;

  return (
    <div className="about-us-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="about-us-overlay">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutUs;

