import React from "react";
import dataJson from "../../json/data.json";
import "./Equipments.css";

const Equipments = () => {
  const data = dataJson["4"];
  const { heading, backgroundImage, description, equipments } = data;

  return (
    <div className="equipments-page">
     

      <section className="equipments-section">
        <h2>Major Equipment Available For PG Testing Of Cooling Tower</h2>
        <div className="equipment-grid">
          {equipments.map((item, index) => (
            <div key={index} className="equipment-card">
              <div className="equipment-icon">🛠️</div>
              <h4>{item.title}</h4>
              {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
              {item.desc && <p className="desc">{item.desc}</p>}
              <p className="count">{item.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Equipments;
