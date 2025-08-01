import React from 'react';
import './EquipmentsIntro.css';
import data from '../../json/data.json'; // Adjust path as needed

const EquipmentsIntro = () => {
  const equipmentData = data["4"];

  if (!equipmentData) return null;

  const { heading, description, backgroundImage } = equipmentData;

  return (
    <div
      className="equipments-intro-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="equipments-intro-overlay">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EquipmentsIntro;
