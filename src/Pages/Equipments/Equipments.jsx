import React, { useState } from "react";
import data from "../../json/data.json";
import "./Equipments.css";
import EquipmentsIntro from "../../components/EquipmentsIntro/EquipmentsIntro";

const Equipments = () => {
  const equipmentData = data["4"];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  if (!equipmentData) return null;

  return (
    <div className="equipments-page">
      {/* Page Heading */}
      <EquipmentsIntro/>
      <div className="equipments-section">
          <h2>Major Equipment Available For PG Testing Of Cooling Tower</h2>
        <div className="equipment-grid">
          {equipmentData.equipments.map((item, index) => (
            <div
              key={index}
              className="equipment-card"
              onClick={() => handleCardClick(item)}
            >
              <div className="equipment-icon">🛠️</div>
              <h4>{item.title}</h4>
              {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
              {item.desc && <p className="desc">{item.desc}</p>}
              <p className="count">{item.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={handleClose}>
              &times;
            </span>
            <h3>{selectedItem.title}</h3>
            {selectedItem.subtitle && (
              <p>
                <strong>Subtitle:</strong> {selectedItem.subtitle}
              </p>
            )}
            {selectedItem.desc && (
              <p>
                <strong>Description:</strong> {selectedItem.desc}
              </p>
            )}
            <p>
              <strong>Count:</strong> {selectedItem.count}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipments;
